import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f9zkh-z-p.css';
import '../../css/v/v90y1gd3r.css';
import '../../css/s/szvw3x86h.css';
import '../../css/d/dq60wlbxs.css';
import '../../css/b/b9him6jfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f9zkh-z-p"/><path class="v90y1gd3r"/><path class="szvw3x86h"/><path class="dq60wlbxs"/><path class="b9him6jfk"/></g>`,
		"fallback": "iconaut:server-cog",
	});
}

export default Component;
