import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq0yy1vxs.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq0yy1vxs"/>`,
		"fallback": "devicon-plain:leetcode",
	});
}

export default Component;
