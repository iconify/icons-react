import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boof0ab7f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boof0ab7f"/>`,
		"fallback": "carbon:pentagon-outline",
	});
}

export default Component;
