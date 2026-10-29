import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kgfx3e43q.css';
import '../../css/p/p8yrg0x8f.css';
import '../../css/y/yt69a67rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kgfx3e43q wm-a"/><path class="p8yrg0x8f"/><path class="wm-a yt69a67rh"/></g>`,
		"fallback": "withicons:microscope",
	});
}

export default Component;
