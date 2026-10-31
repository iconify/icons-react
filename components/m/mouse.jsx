import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qq09dvjsn.css';
import '../../css/h/ha3wfxsgd.css';
import '../../css/y/y-jke6fdc.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/w/wrw8jr1fo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGiH2qCdun" cx="8.74" cy="6.18" r="22.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="qq09dvjsn wm-shadow"/><path fill="url(#SVGiH2qCdun)" class="ha3wfxsgd wm-k"/><path class="wm-shine y-jke6fdc"/><path class="gyytzlc5m wm-deco"/><path class="wm-deco wrw8jr1fo"/></g>`,
		"fallback": "withicons-rangoli:mouse",
	});
}

export default Component;
