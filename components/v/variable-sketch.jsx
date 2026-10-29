import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kd2kgzxwm.css';
import '../../css/c/cmsh8wksz.css';
import '../../css/q/qgagtibcc.css';
import '../../css/w/wm0iktbrc.css';
import '../../css/f/f0qtlug9j.css';
import '../../css/s/sdpnigqsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kd2kgzxwm wm-k"/><path class="cmsh8wksz wm-k"/><path class="qgagtibcc wm-k"/><path class="wm-k wm0iktbrc"/><path class="f0qtlug9j wm-a"/><path class="sdpnigqsv wm-a"/></g>`,
		"fallback": "withicons:variable-sketch",
	});
}

export default Component;
