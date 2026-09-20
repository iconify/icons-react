import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xe53owbmy.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/z/zopjch_2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle transform="rotate(90 12 5)" class="xe53owbmy"/><circle transform="rotate(90 12 12)" class="h_tsn8bxt"/><circle transform="rotate(90 12 19)" class="zopjch_2q"/></g>`,
		"fallback": "solar:menu-dots-vertical-linear",
	});
}

export default Component;
