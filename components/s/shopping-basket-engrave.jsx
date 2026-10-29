import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ia9jf8keg.css';
import '../../css/f/f42w_jtvu.css';
import '../../css/t/tgn_vbbtq.css';
import '../../css/u/ug-g1ubih.css';
import '../../css/f/fz2woib5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ia9jf8keg wm-k"/><path class="f42w_jtvu wm-a"/><path class="tgn_vbbtq wm-shadow"/><path class="ug-g1ubih wm-k"/><path class="fz2woib5m wm-a"/></g>`,
		"fallback": "withicons:shopping-basket-engrave",
	});
}

export default Component;
