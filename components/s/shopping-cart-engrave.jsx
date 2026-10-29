import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f19a-bbhg.css';
import '../../css/k/k60dwsbzs.css';
import '../../css/w/wjvpugbbq.css';
import '../../css/y/ytznpnb1t.css';
import '../../css/e/euee9wbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f19a-bbhg wm-k"/><path class="k60dwsbzs wm-a"/><path class="wjvpugbbq wm-shadow"/><path class="wm-k ytznpnb1t"/><path class="euee9wbaf wm-a"/></g>`,
		"fallback": "withicons:shopping-cart-engrave",
	});
}

export default Component;
