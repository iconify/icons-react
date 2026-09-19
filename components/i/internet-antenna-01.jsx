import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v0wvqj6_x.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/s/s4v36abdu.css';
import '../../css/w/wr4dgn3dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v0wvqj6_x"/><circle class="h_tsn8bxt"/><path class="s4v36abdu"/><path class="wr4dgn3dm"/></g>`,
		"fallback": "hugeicons:internet-antenna-01",
	});
}

export default Component;
