import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/n/ne5iqibmo.css';
import '../../css/r/rgh6_kbiy.css';
import '../../css/w/w4lrmqbtx.css';
import '../../css/w/w8bi86fvu.css';
import '../../css/w/w2ldzvbmm.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="ne5iqibmo"/><path class="rgh6_kbiy"/><path class="w4lrmqbtx"/><path class="w8bi86fvu"/><path class="w2ldzvbmm"/></g>`,
		"fallback": "streamline-stickies-color:keyboard-direction",
	});
}

export default Component;
