import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dqvkli3td.css';
import '../../css/t/tev0_7rwp.css';
import '../../css/w/wawugdb_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dqvkli3td"/><path class="tev0_7rwp"/><path class="wawugdb_n"/></g>`,
		"fallback": "solar:satellite-broken",
	});
}

export default Component;
