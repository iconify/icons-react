import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hgw746brd.css';
import '../../css/j/jeu2p4bqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hgw746brd"/><path class="jeu2p4bqb"/></g>`,
		"fallback": "solar:sofa-2-line-duotone",
	});
}

export default Component;
