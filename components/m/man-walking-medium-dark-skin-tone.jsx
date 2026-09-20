import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eztqw9biy.css';
import '../../css/g/gcw1jebsm.css';
import '../../css/b/b7k4vkb4y.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/k/kki4zxl5e.css';
import '../../css/u/ujseujbsm.css';
import '../../css/a/a847upcpg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="eztqw9biy"><circle class="gcw1jebsm"/><path class="b7k4vkb4y"/></g><g class="x8poo_bjf"><ellipse class="kki4zxl5e"/><path class="ujseujbsm"/><path class="a847upcpg"/></g>`,
		"fallback": "openmoji:man-walking-medium-dark-skin-tone",
	});
}

export default Component;
