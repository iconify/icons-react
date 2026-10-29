import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vu-x1gbel.css';
import '../../css/c/cg82-5icg.css';
import '../../css/p/psdaelb_o.css';
import '../../css/d/dqngn753r.css';
import '../../css/e/e88n4oijh.css';
import '../../css/f/f-k5oeq-j.css';
import '../../css/w/w3r45wbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vu-x1gbel wm-k"/><path class="cg82-5icg wm-a"/><path class="psdaelb_o wm-s"/><path class="dqngn753r wm-shadow"/><path class="e88n4oijh wm-k"/><path class="f-k5oeq-j wm-a"/><path class="w3r45wbbs wm-s"/></g>`,
		"fallback": "withicons:monitor-smartphone-engrave",
	});
}

export default Component;
