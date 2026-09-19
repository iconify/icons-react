import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paf3y539o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paf3y539o"/>`,
		"fallback": "fluent-mdl2:processing",
	});
}

export default Component;
