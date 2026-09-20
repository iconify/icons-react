import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aru2yfbdz.css';
import '../../css/i/i1khnxbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aru2yfbdz"/><path class="i1khnxbxo"/></g>`,
		"fallback": "solar:planet-broken",
	});
}

export default Component;
