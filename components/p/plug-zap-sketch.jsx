import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/po3mwhbob.css';
import '../../css/c/csggutbvi.css';
import '../../css/c/cpa-a-bgn.css';
import '../../css/z/z_t_5xs2k.css';
import '../../css/k/kwkygzbyd.css';
import '../../css/u/umhjfobpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="po3mwhbob"/><path class="csggutbvi wm-a"/><path class="cpa-a-bgn wm-s"/><path class="wm-k z_t_5xs2k"/><path class="kwkygzbyd wm-a"/><path class="umhjfobpc wm-s"/></g>`,
		"fallback": "withicons:plug-zap-sketch",
	});
}

export default Component;
