import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4pr92b0j.css';
import '../../css/t/tep48fbka.css';
import '../../css/h/huvi0vdtx.css';
import '../../css/n/ncb20ka2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l4pr92b0j"/><path class="tep48fbka"/><path class="huvi0vdtx"/><path class="ncb20ka2n"/></g>`,
		"fallback": "solar:sofa-2-linear",
	});
}

export default Component;
