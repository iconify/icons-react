import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ituv_m4-l.css';
import '../../css/c/cth_9lbgc.css';
import '../../css/s/smj2mw7cm.css';
import '../../css/v/vl_m2cbkf.css';
import '../../css/t/tn51lubsq.css';
import '../../css/z/zhxc1wb9z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ituv_m4-l"/><path class="cth_9lbgc"/><path class="smj2mw7cm"/><path class="vl_m2cbkf"/><path class="tn51lubsq"/><path class="zhxc1wb9z"/>`,
		"fallback": "openmoji:satellite-antenna",
	});
}

export default Component;
