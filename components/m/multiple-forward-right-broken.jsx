import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lv8hw-b0r.css';
import '../../css/l/lviekhm3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lv8hw-b0r"/><path class="lviekhm3k"/></g>`,
		"fallback": "solar:multiple-forward-right-broken",
	});
}

export default Component;
