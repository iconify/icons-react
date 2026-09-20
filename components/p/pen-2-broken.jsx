import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xkt085bgn.css';
import '../../css/v/v14roo_jq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xkt085bgn"/><path class="v14roo_jq"/></g>`,
		"fallback": "solar:pen-2-broken",
	});
}

export default Component;
