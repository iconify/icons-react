import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wsja2rbwu.css';
import '../../css/t/ts5mlkbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wsja2rbwu"/><path class="ts5mlkbdl"/></g>`,
		"fallback": "hugeicons:strikethrough",
	});
}

export default Component;
