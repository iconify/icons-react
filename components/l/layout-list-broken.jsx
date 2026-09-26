import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xuny64b0w.css';
import '../../css/z/zzoug-3hz.css';
import '../../css/j/jm1dfw2ei.css';
import '../../css/n/nivfk3byh.css';
import '../../css/y/yn4ftnbvf.css';
import '../../css/m/mocjfac8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xuny64b0w"/><path class="zzoug-3hz"/><path class="jm1dfw2ei"/><path class="nivfk3byh"/><path class="yn4ftnbvf"/><path class="mocjfac8k"/></g>`,
		"fallback": "solar:layout-list-broken",
	});
}

export default Component;
