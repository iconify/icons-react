import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/asw3fob5g.css';
import '../../css/z/zsc5-p0ft.css';
import '../../css/d/dnl23qbfb.css';
import '../../css/f/fxxrxhu1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="asw3fob5g"/><path class="zsc5-p0ft"/><path class="dnl23qbfb"/><path class="fxxrxhu1e"/></g>`,
		"fallback": "solar:notes-line-duotone",
	});
}

export default Component;
