import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qcme_mbpa.css';
import '../../css/s/s7_ch4bue.css';
import '../../css/z/zzbephy_q.css';
import '../../css/o/ow1y8dbgh.css';
import '../../css/p/p8i967bcu.css';
import '../../css/g/gsmw9fbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qcme_mbpa wm-shadow"/><path class="s7_ch4bue wm-shadow"/><path class="zzbephy_q"/><path class="ow1y8dbgh"/><path class="p8i967bcu"/><path class="gsmw9fbvy wm-s"/></g>`,
		"fallback": "withicons-brutal:video-plus",
	});
}

export default Component;
