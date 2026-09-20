import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t0bdzibjv.css';
import '../../css/f/fygz0y4og.css';
import '../../css/z/z2ah-61oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t0bdzibjv"/><path class="fygz0y4og"/><path class="z2ah-61oe"/></g>`,
		"fallback": "solar:shop-broken",
	});
}

export default Component;
