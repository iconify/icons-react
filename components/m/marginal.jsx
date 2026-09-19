import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv5v4ubor.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv5v4ubor"/>`,
		"fallback": "carbon:marginal",
	});
}

export default Component;
