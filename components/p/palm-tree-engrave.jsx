import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mrvy4_b6j.css';
import '../../css/y/ymz7xhbvh.css';
import '../../css/w/wby-z7brq.css';
import '../../css/u/ukjbh_bly.css';
import '../../css/n/nrb_pjbun.css';
import '../../css/q/qcfnobbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mrvy4_b6j wm-k"/><path class="wm-a ymz7xhbvh"/><path class="wby-z7brq wm-shadow"/><path class="ukjbh_bly wm-k"/><path class="nrb_pjbun wm-k"/><path class="qcfnobbty wm-a"/></g>`,
		"fallback": "withicons:palm-tree-engrave",
	});
}

export default Component;
