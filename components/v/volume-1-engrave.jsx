import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f6jp3jbsz.css';
import '../../css/i/ia41obz6w.css';
import '../../css/c/ctl-cmswa.css';
import '../../css/s/st-oxhb_e.css';
import '../../css/t/tisd5ib6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f6jp3jbsz wm-k"/><path class="ia41obz6w wm-a"/><path class="ctl-cmswa wm-shadow"/><path class="st-oxhb_e wm-k"/><path class="tisd5ib6g wm-a"/></g>`,
		"fallback": "withicons:volume-1-engrave",
	});
}

export default Component;
