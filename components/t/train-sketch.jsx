import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vblq2mbbm.css';
import '../../css/p/pqtud87xv.css';
import '../../css/l/l1ws4ub1l.css';
import '../../css/y/y7hw3s1rt.css';
import '../../css/z/z57eb0b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vblq2mbbm"/><path class="pqtud87xv wm-k"/><path class="l1ws4ub1l wm-a"/><path class="wm-k y7hw3s1rt"/><path class="wm-a z57eb0b1w"/></g>`,
		"fallback": "withicons:train-sketch",
	});
}

export default Component;
