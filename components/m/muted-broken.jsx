import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xfobu52el.css';
import '../../css/u/u6s7pcbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xfobu52el"/><path class="u6s7pcbxc"/></g>`,
		"fallback": "solar:muted-broken",
	});
}

export default Component;
