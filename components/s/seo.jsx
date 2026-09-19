import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iie4utz_t.css';
import '../../css/w/wvfpftb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iie4utz_t"/><path class="wvfpftb8x"/></g>`,
		"fallback": "hugeicons:seo",
	});
}

export default Component;
