import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xgvf4qxdo.css';
import '../../css/r/rn1zsslsx.css';
import '../../css/k/k2j4asbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xgvf4qxdo"/><path class="rn1zsslsx"/><path class="k2j4asbpi"/></g>`,
		"fallback": "solar:layers-minimalistic-broken",
	});
}

export default Component;
