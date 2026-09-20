import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/niifs_bbw.css';
import '../../css/j/j8xskkbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="niifs_bbw"/><path class="j8xskkbdh"/></g>`,
		"fallback": "solar:laptop-2-broken",
	});
}

export default Component;
