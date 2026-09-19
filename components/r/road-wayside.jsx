import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ukui8eg5j.css';
import '../../css/h/hwpak3kky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ukui8eg5j"/><path class="hwpak3kky"/></g>`,
		"fallback": "hugeicons:road-wayside",
	});
}

export default Component;
