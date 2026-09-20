import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ncb20ka2n.css';
import '../../css/l/l4pr92b0j.css';
import '../../css/t/tep48fbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ncb20ka2n"/><path class="l4pr92b0j"/><path class="tep48fbka"/></g>`,
		"fallback": "solar:sofa-linear",
	});
}

export default Component;
