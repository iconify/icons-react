import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2ukffbfm.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/o/ope5ptb9j.css';
import '../../css/d/d9dngzb9u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2ukffbfm"/><g class="ij2x_72vy"><circle class="ope5ptb9j"/><path class="d9dngzb9u"/></g>`,
		"fallback": "openmoji:sun",
	});
}

export default Component;
