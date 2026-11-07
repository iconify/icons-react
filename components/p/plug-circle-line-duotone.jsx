import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r0fjgcb6p.css';
import '../../css/h/h0rtdjbeb.css';
import '../../css/n/ndcdy4d6d.css';
import '../../css/z/zvfketbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r0fjgcb6p"/><path class="h0rtdjbeb"/><path class="ndcdy4d6d"/><path class="zvfketbhl"/></g>`,
		"fallback": "solar:plug-circle-line-duotone",
	});
}

export default Component;
