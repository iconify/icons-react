import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ufezbhbnb.css';
import '../../css/d/dr38pibpy.css';
import '../../css/y/y0u8crxjd.css';
import '../../css/d/dwerylbgk.css';
import '../../css/x/x4yeyq53o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ufezbhbnb wm-shadow"/><path class="dr38pibpy"/><path class="y0u8crxjd"/><path class="dwerylbgk"/><path class="x4yeyq53o"/></g>`,
		"fallback": "withicons-retro:key-round",
	});
}

export default Component;
