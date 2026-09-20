import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e6fsq3dmz.css';
import '../../css/e/es5c5ho5q.css';
import '../../css/y/yivdtj5uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e6fsq3dmz"/><path class="es5c5ho5q"/><path class="yivdtj5uu"/></g>`,
		"fallback": "solar:record-minimalistic-broken",
	});
}

export default Component;
