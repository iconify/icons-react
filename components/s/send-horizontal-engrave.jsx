import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l01wgmbii.css';
import '../../css/e/e980yoblz.css';
import '../../css/u/uu_zhdcpe.css';
import '../../css/h/h0rhmfbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l01wgmbii wm-k"/><path class="e980yoblz wm-shadow"/><path class="uu_zhdcpe wm-k"/><path class="h0rhmfbpn wm-a"/></g>`,
		"fallback": "withicons:send-horizontal-engrave",
	});
}

export default Component;
