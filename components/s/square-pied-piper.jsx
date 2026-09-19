import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcc6q1bxt.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcc6q1bxt"/>`,
		"fallback": "fa6-brands:square-pied-piper",
	});
}

export default Component;
