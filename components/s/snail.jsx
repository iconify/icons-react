import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viyle3bdn.css';
import '../../css/i/isw4psbyy.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/j/j98506bch.css';
import '../../css/h/h36avfbhm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viyle3bdn"/><path class="isw4psbyy"/><g class="ij2x_72vy"><path class="j98506bch"/><path class="h36avfbhm"/></g>`,
		"fallback": "openmoji:snail",
	});
}

export default Component;
