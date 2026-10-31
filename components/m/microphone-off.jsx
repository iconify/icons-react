import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5eak3k2p.css';
import '../../css/s/sxz7n_bfg.css';
import '../../css/f/fw_9m8bgf.css';
import '../../css/b/bq2upackq.css';
import '../../css/c/c0q88ibhp.css';
import '../../css/h/hdtfr9hjk.css';
import '../../css/m/m_y9uobpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l5eak3k2p"><path class="sxz7n_bfg wm-shadow"/><path class="fw_9m8bgf wm-shadow"/><path class="bq2upackq wm-k"/><path class="c0q88ibhp wm-k"/><path class="hdtfr9hjk wm-s"/><path class="m_y9uobpv wm-s"/></g>`,
		"fallback": "withicons-brutal:microphone-off",
	});
}

export default Component;
