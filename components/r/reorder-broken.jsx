import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hfpr3cbbr.css';
import '../../css/o/oiy9mib8b.css';
import '../../css/h/hhlxfkbol.css';
import '../../css/h/hxd6ts2yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hfpr3cbbr"/><path class="oiy9mib8b"/><path class="hhlxfkbol"/><path class="hxd6ts2yz"/></g>`,
		"fallback": "solar:reorder-broken",
	});
}

export default Component;
