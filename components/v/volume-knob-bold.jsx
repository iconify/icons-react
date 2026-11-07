import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i89m0ubbr.css';
import '../../css/i/isr_23fea.css';
import '../../css/l/lhqjkttpi.css';
import '../../css/v/v1kt_hbdn.css';
import '../../css/a/ahggenxib.css';
import '../../css/x/xriqzy4ev.css';
import '../../css/b/br28y0dtz.css';
import '../../css/e/e840iqbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i89m0ubbr"/><path class="isr_23fea"/><path class="lhqjkttpi"/><path class="v1kt_hbdn"/><path class="ahggenxib"/><path class="xriqzy4ev"/><path class="br28y0dtz"/><path class="e840iqbhy"/>`,
		"fallback": "solar:volume-knob-bold",
	});
}

export default Component;
