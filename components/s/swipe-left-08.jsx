import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a7p89vbhb.css';
import '../../css/p/plx48ebtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a7p89vbhb"/><path class="plx48ebtz"/></g>`,
		"fallback": "hugeicons:swipe-left-08",
	});
}

export default Component;
