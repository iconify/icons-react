import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/ww_rkp44a.css';
import '../../css/m/mzt20rg6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ww_rkp44a"/><path class="mzt20rg6b"/></g>`,
		"fallback": "solar:t-shirt-line-duotone",
	});
}

export default Component;
