import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qesyv5buv.css';
import '../../css/d/djbi_ub-i.css';
import '../../css/x/x_2hitbgb.css';
import '../../css/s/spodu6bqp.css';
import '../../css/i/i98cvin-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qesyv5buv"/><path class="djbi_ub-i"/><path class="x_2hitbgb"/><path class="spodu6bqp"/><path class="i98cvin-m"/></g>`,
		"fallback": "solar:list-plus-broken",
	});
}

export default Component;
