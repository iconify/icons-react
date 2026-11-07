import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g65hvpbwb.css';
import '../../css/t/t7fjfmboq.css';
import '../../css/z/zgg5gabcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g65hvpbwb"/><path class="t7fjfmboq"/><path class="zgg5gabcf"/>`,
		"fallback": "solar:moon-stars-bold",
	});
}

export default Component;
