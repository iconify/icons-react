import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dgeooxrnl.css';
import '../../css/a/aru2yfbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dgeooxrnl"/><path class="aru2yfbdz"/></g>`,
		"fallback": "solar:planet-2-broken",
	});
}

export default Component;
