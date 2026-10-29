import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/um_jn1gtm.css';
import '../../css/t/toaaljiww.css';
import '../../css/v/v2ukonb-w.css';
import '../../css/m/mmlua4bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="um_jn1gtm wm-k"/><path class="toaaljiww wm-shadow"/><path class="v2ukonb-w wm-k"/><path class="mmlua4bng wm-a"/></g>`,
		"fallback": "withicons:map-pin-check-engrave",
	});
}

export default Component;
