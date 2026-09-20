import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/x/xfy0nnwjl.css';
import '../../css/f/fhy922bbx.css';
import '../../css/w/whvwt4bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hq-5njbjh"/><path class="xfy0nnwjl"/><path class="fhy922bbx"/><path class="whvwt4bny"/></g>`,
		"fallback": "solar:suitcase-lines-broken",
	});
}

export default Component;
