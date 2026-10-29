import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z6c_4cipf.css';
import '../../css/t/tfl1-h3qx.css';
import '../../css/m/mhlqgvb8s.css';
import '../../css/i/ipkd9vbgw.css';
import '../../css/h/hchqqbcqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k z6c_4cipf"/><path class="tfl1-h3qx wm-a"/><path class="mhlqgvb8s wm-shadow"/><path class="ipkd9vbgw wm-k"/><path class="hchqqbcqj wm-a"/></g>`,
		"fallback": "withicons:thermometer-snowflake-engrave",
	});
}

export default Component;
