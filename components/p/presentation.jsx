import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/o/oc570rd9i.css';
import '../../css/e/evoezcctq.css';
import '../../css/w/wx2thw_pv.css';
import '../../css/v/vq2mp1brb.css';
import '../../css/o/o0crcmb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="oc570rd9i"/><path class="evoezcctq"/><path class="wx2thw_pv"/><path class="vq2mp1brb"/><path class="o0crcmb-z"/></g>`,
		"fallback": "matita:presentation",
	});
}

export default Component;
