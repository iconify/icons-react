import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/x/xpr1inmhg.css';
import '../../css/i/iw2l9wbds.css';
import '../../css/x/xqq32-b8u.css';
import '../../css/p/p7shhrbbj.css';
import '../../css/m/mx66r9q5s.css';
import '../../css/r/r7lzlabni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGydlSFdpI" cx="6.84" cy="7.11" r="25.53" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="wm-shadow xpr1inmhg"/><path fill="url(#SVGydlSFdpI)" class="iw2l9wbds wm-k"/><path class="wm-shine xqq32-b8u"/><path class="p7shhrbbj wm-s"/><path class="mx66r9q5s wm-deco"/><path class="r7lzlabni wm-deco"/></g>`,
		"fallback": "withicons-rangoli:star-off",
	});
}

export default Component;
