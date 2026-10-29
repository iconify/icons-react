import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e7hcak27b.css';
import '../../css/u/utg8_vczy.css';
import '../../css/n/ns3615s4x.css';
import '../../css/h/h3j0dobbv.css';
import '../../css/x/xo3c2xgrb.css';
import '../../css/y/yd69yesjd.css';
import '../../css/q/qc_nround.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e7hcak27b"/><path class="utg8_vczy wm-k"/><path class="ns3615s4x wm-a"/><path class="h3j0dobbv wm-s"/><path class="wm-k xo3c2xgrb"/><path class="wm-a yd69yesjd"/><path class="qc_nround wm-s"/></g>`,
		"fallback": "withicons:paint-bucket-sketch",
	});
}

export default Component;
