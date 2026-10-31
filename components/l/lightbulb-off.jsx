import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/o/oky-shb4l.css';
import '../../css/n/nr3pc7fgf.css';
import '../../css/q/qgz15ib5l.css';
import '../../css/p/p7shhrbbj.css';
import '../../css/p/pxt-c7buc.css';
import '../../css/u/urn1xe1fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGoqZvxd3P" cx="8.52" cy="5.68" r="23.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="oky-shb4l wm-shadow"/><path fill="url(#SVGoqZvxd3P)" class="nr3pc7fgf wm-k"/><path class="qgz15ib5l wm-shine"/><path class="p7shhrbbj wm-s"/><path class="pxt-c7buc wm-deco"/><path class="urn1xe1fk wm-deco"/></g>`,
		"fallback": "withicons-rangoli:lightbulb-off",
	});
}

export default Component;
