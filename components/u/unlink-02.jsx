import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uxj9ph_rd.css';
import '../../css/i/iv621-mbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uxj9ph_rd"/><path class="iv621-mbz"/></g>`,
		"fallback": "hugeicons:unlink-02",
	});
}

export default Component;
