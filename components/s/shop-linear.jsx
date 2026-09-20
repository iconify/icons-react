import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mumuggp5l.css';
import '../../css/w/wuk4o269j.css';
import '../../css/z/zwtdkobff.css';
import '../../css/b/bppk80h1t.css';
import '../../css/z/z2ah-61oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mumuggp5l"/><path class="wuk4o269j"/><path class="zwtdkobff"/><path class="bppk80h1t"/><path class="z2ah-61oe"/></g>`,
		"fallback": "solar:shop-linear",
	});
}

export default Component;
