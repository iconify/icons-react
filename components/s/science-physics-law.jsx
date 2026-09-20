import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c22mdffki.css';
import '../../css/z/zo3lmtbyu.css';
import '../../css/s/s7ergcbpy.css';
import '../../css/p/pvri_0gfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c22mdffki"/><path class="zo3lmtbyu"/><path class="s7ergcbpy"/><path class="pvri_0gfj"/></g>`,
		"fallback": "streamline-ultimate-color:science-physics-law",
	});
}

export default Component;
