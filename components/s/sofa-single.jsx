import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kz-2l07lp.css';
import '../../css/y/y5xl-gbup.css';
import '../../css/y/y1pnovgss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kz-2l07lp"/><path class="y5xl-gbup"/><path class="y1pnovgss"/></g>`,
		"fallback": "hugeicons:sofa-single",
	});
}

export default Component;
