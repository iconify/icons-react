import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6aatbbnu.css';
import '../../css/p/pqx2-oyar.css';
import '../../css/l/l4vllvb7o.css';
import '../../css/t/tnwts_9gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c6aatbbnu"/><path class="pqx2-oyar"/><path class="l4vllvb7o"/><path class="tnwts_9gl"/></g>`,
		"fallback": "solar:list-check-minimalistic-broken",
	});
}

export default Component;
