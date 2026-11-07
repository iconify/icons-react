import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dkbrsu1-j.css';
import '../../css/o/og22qxbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dkbrsu1-j"/><path class="og22qxbrp"/></g>`,
		"fallback": "solar:laptop-3-linear",
	});
}

export default Component;
