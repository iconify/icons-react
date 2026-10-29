import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mjw8hcbkc.css';
import '../../css/k/knhos3f_x.css';
import '../../css/p/pwsazko7z.css';
import '../../css/j/jv3lt9s1r.css';
import '../../css/c/cb1l5hrxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mjw8hcbkc"/><path class="knhos3f_x wm-s"/><path class="pwsazko7z wm-s"/><path class="jv3lt9s1r"/><path class="cb1l5hrxt wm-a"/></g>`,
		"fallback": "withicons:jack-o-lantern-duo",
	});
}

export default Component;
