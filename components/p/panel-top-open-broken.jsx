import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tp0liacle.css';
import '../../css/w/wip28lbxr.css';
import '../../css/q/quujejbhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tp0liacle"/><path class="wip28lbxr"/><path class="quujejbhk"/></g>`,
		"fallback": "solar:panel-top-open-broken",
	});
}

export default Component;
