import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u_u9u_b6m.css';
import '../../css/f/fw0ppnbex.css';
import '../../css/k/k-xqiwbqo.css';
import '../../css/z/zwiw2-bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u_u9u_b6m"/><path class="fw0ppnbex"/><path class="k-xqiwbqo"/><path class="zwiw2-bkv"/></g>`,
		"fallback": "solar:streets-map-point-broken",
	});
}

export default Component;
