import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea90dub6v.css';
import '../../css/d/dtr-ttbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ea90dub6v"/><path class="dtr-ttbxk"/></g>`,
		"fallback": "solar:password-minimalistic-linear",
	});
}

export default Component;
