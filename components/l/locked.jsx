import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kawrq6d1m.css';
import '../../css/m/mjvs1cblk.css';
import '../../css/i/i81te_6rg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/q/qpu-t5qeu.css';
import '../../css/d/defjnrbmc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kawrq6d1m"/><path class="mjvs1cblk"/><path class="i81te_6rg"/><g class="ij2x_72vy"><path class="qpu-t5qeu"/><path class="defjnrbmc"/></g>`,
		"fallback": "openmoji:locked",
	});
}

export default Component;
