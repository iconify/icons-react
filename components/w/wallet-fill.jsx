import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/w/w6s_hllyq.css';
import '../../css/k/kuxqn_r4l.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcxzdibwu.css';
import '../../css/j/jxh3-wm-c.css';
import '../../css/g/gxh0kblhx.css';
import '../../css/p/pab4h7bqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGZ2rvBbZR" width="20" height="14" x="2" y="8" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="w6s_hllyq"/><path class="kuxqn_r4l"/></mask><g class="ft5dv1b6b"><path class="wcxzdibwu"/><path class="jxh3-wm-c"/><path class="gxh0kblhx"/><path mask="url(#SVGZ2rvBbZR)" class="pab4h7bqq"/></g>`,
		"fallback": "lets-icons:wallet-fill",
	});
}

export default Component;
