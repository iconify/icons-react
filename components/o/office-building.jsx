import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/i/ivf-juwaw.css';
import '../../css/h/hy95nbtll.css';
import '../../css/y/yt8b-llwv.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/t_b_gd5dv.css';
import '../../css/f/fro--ibyq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="ivf-juwaw"/><path class="hy95nbtll"/><path class="yt8b-llwv"/></g><g class="ij2x_72vy"><path class="t_b_gd5dv"/><path class="fro--ibyq"/></g>`,
		"fallback": "openmoji:office-building",
	});
}

export default Component;
