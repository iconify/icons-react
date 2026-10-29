import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hchbowbmx.css';
import '../../css/e/ezb3ff6ma.css';
import '../../css/a/a3b2f1bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hchbowbmx wm-a"/><path class="ezb3ff6ma"/><path class="a3b2f1bep wm-a"/></g>`,
		"fallback": "withicons:list-music-duo",
	});
}

export default Component;
