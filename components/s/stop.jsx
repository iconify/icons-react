import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/y/y5lxt9b3r.css';
import '../../css/r/rc16xvbqy.css';
import '../../css/v/vgghzkbyq.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/t/t1kdfjbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGcbYuKeUx" cx="8.52" cy="7.58" r="20.11" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="wm-shadow y5lxt9b3r"/><path fill="url(#SVGcbYuKeUx)" class="rc16xvbqy wm-k"/><path class="vgghzkbyq wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="t1kdfjbwj wm-deco"/></g>`,
		"fallback": "withicons-rangoli:stop",
	});
}

export default Component;
