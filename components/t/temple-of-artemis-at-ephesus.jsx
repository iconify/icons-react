import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msgrqq25w.css';
import '../../css/v/v11r7_b8f.css';
import '../../css/g/ghjiyhm_g.css';
import '../../css/k/kfud3pbhl.css';
import '../../css/s/swf_6-bzp.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hw3p6f_pr.css';
import '../../css/d/dtpnimjhv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msgrqq25w"/><path class="v11r7_b8f"/><rect class="ghjiyhm_g"/><rect class="kfud3pbhl"/><path class="swf_6-bzp"/><g class="jn8qy4bru"><path class="hw3p6f_pr"/><path class="dtpnimjhv"/></g>`,
		"fallback": "openmoji:temple-of-artemis-at-ephesus",
	});
}

export default Component;
