import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jv3lt9s1r.css';
import '../../css/r/rdjxs30_z.css';
import '../../css/p/pwsazko7z.css';
import '../../css/y/yn_loccov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jv3lt9s1r"/><path class="rdjxs30_z wm-a"/><path class="pwsazko7z wm-s"/><path class="wm-a yn_loccov"/></g>`,
		"fallback": "withicons:jack-o-lantern",
	});
}

export default Component;
