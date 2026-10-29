import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z206ftbpl.css';
import '../../css/u/uz4ph3b3b.css';
import '../../css/n/n154-5upq.css';
import '../../css/d/de8wv2j4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z206ftbpl"/><path class="uz4ph3b3b wm-s"/><path class="n154-5upq"/><path class="de8wv2j4l wm-a"/></g>`,
		"fallback": "withicons:rakhi",
	});
}

export default Component;
