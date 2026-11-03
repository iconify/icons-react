import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kemzep4yh.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/d/de0lnx-3x.css';
import '../../css/k/k5nfwvbrj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kemzep4yh"/><g class="ij2x_72vy"><path class="de0lnx-3x"/><path class="k5nfwvbrj"/></g>`,
		"fallback": "openmoji:parking-garage",
	});
}

export default Component;
