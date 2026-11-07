import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nsru6hb0x.css';
import '../../css/x/xjazw_bok.css';
import '../../css/u/ur_44xbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nsru6hb0x"/><path class="xjazw_bok"/><path class="ur_44xbhw"/></g>`,
		"fallback": "solar:square-academic-cap-line-duotone",
	});
}

export default Component;
