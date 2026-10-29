import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mm-gt2b9k.css';
import '../../css/y/yu89iabdp.css';
import '../../css/k/k8n73abrs.css';
import '../../css/h/hbjcd_klt.css';
import '../../css/v/vpx65vhyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mm-gt2b9k wm-deco"/><path class="wm-k yu89iabdp"/><path class="k8n73abrs wm-k"/><path class="hbjcd_klt wm-a"/><path class="vpx65vhyy wm-a"/></g>`,
		"fallback": "withicons:lasso-sketch",
	});
}

export default Component;
