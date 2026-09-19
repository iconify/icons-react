import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/y/ytm95u6wp.css';
import '../../css/l/l2ky_3b3g.css';
import '../../css/o/opk08bbnl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ytm95u6wp"/><path class="l2ky_3b3g"/><circle transform="rotate(-90 13 9)" class="opk08bbnl"/></g>`,
		"fallback": "icon-park:u-turn-up",
	});
}

export default Component;
