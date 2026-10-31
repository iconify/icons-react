import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/o/o_t0dvbvu.css';
import '../../css/s/sal_90ycc.css';
import '../../css/e/ex0yxzbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGU00zieBw" cx="7.64" cy="6.46" r="25.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="o_t0dvbvu wm-shadow"/><path fill="url(#SVGU00zieBw)" class="sal_90ycc wm-k"/><path class="ex0yxzbwx wm-shine"/></g>`,
		"fallback": "withicons-rangoli:panel-bottom",
	});
}

export default Component;
