import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a50926hxi.css';
import '../../css/i/ituedbz1l.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/fw6z04b1v.css';
import '../../css/k/kgl8gnbwp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a50926hxi"/><path class="ituedbz1l"/><g class="ij2x_72vy"><path class="fw6z04b1v"/><path class="kgl8gnbwp"/></g>`,
		"fallback": "openmoji:rugby-football",
	});
}

export default Component;
