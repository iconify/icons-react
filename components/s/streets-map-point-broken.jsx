import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ijmauiszs.css';
import '../../css/q/qgn5of9bp.css';
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
		"content": `<g class="ipq1z-bjh"><path class="ijmauiszs"/><path class="qgn5of9bp"/><path class="k-xqiwbqo"/><path class="zwiw2-bkv"/></g>`,
		"fallback": "solar:streets-map-point-broken",
	});
}

export default Component;
