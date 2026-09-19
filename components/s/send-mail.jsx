import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rwzoumlpr.css';
import '../../css/d/ddn2inu5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rwzoumlpr"/><path class="ddn2inu5d"/></g>`,
		"fallback": "iconoir:send-mail",
	});
}

export default Component;
