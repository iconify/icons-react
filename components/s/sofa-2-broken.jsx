import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ojwywwbjm.css';
import '../../css/t/tep48fbka.css';
import '../../css/m/mcmjfab3p.css';
import '../../css/n/ncb20ka2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ojwywwbjm"/><path class="tep48fbka"/><path class="mcmjfab3p"/><path class="ncb20ka2n"/></g>`,
		"fallback": "solar:sofa-2-broken",
	});
}

export default Component;
