import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w2c64bcgk.css';
import '../../css/z/zzl6qufac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w2c64bcgk"/><path class="zzl6qufac"/></g>`,
		"fallback": "solar:link-broken",
	});
}

export default Component;
