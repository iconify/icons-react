import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vto_qpspa.css';
import '../../css/r/rmic-8buf.css';
import '../../css/n/nw92swb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vto_qpspa"/><path class="rmic-8buf"/><path class="nw92swb-t"/></g>`,
		"fallback": "solar:medal-ribbon-star-broken",
	});
}

export default Component;
