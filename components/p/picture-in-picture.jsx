import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/p/pxx-4eb9w.css';
import '../../css/b/b0cusvblt.css';
import '../../css/z/zwhlaxbug.css';
import '../../css/h/hv5rr5kvr.css';
import '../../css/h/hke0fvblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG6HxgaeIr" cx="7.2" cy="7.02" r="25.33" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="pxx-4eb9w wm-shadow"/><path fill="url(#SVG6HxgaeIr)" class="b0cusvblt wm-k"/><path class="wm-k zwhlaxbug"/><path class="hv5rr5kvr wm-k"/><path class="hke0fvblb wm-shine"/></g>`,
		"fallback": "withicons-rangoli:picture-in-picture",
	});
}

export default Component;
