import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xrry15w0o.css';
import '../../css/m/ml0cb1b5h.css';
import '../../css/s/shfdt_lyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xrry15w0o"/><path class="ml0cb1b5h"/><path class="shfdt_lyn"/></g>`,
		"fallback": "solar:panel-left-open-broken",
	});
}

export default Component;
