import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w51c1j92o.css';
import '../../css/f/f460cp0ja.css';
import '../../css/o/o21xwxcop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w51c1j92o wm-a"/><path class="f460cp0ja wm-k"/><path class="o21xwxcop wm-a"/></g>`,
		"fallback": "withicons:tv-sketch",
	});
}

export default Component;
