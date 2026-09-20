import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pqx2-oyar.css';
import '../../css/p/piz2n9t2p.css';
import '../../css/b/b4_g5c43k.css';
import '../../css/i/iq-a2cc9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pqx2-oyar"/><path class="piz2n9t2p"/><path class="b4_g5c43k"/><path class="iq-a2cc9w"/></g>`,
		"fallback": "solar:list-heart-minimalistic-broken",
	});
}

export default Component;
