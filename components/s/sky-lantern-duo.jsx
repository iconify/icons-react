import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m3r3mjbtg.css';
import '../../css/w/w7qq1ntbn.css';
import '../../css/z/z8twkcj3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m3r3mjbtg"/><path class="w7qq1ntbn"/><path class="wm-a z8twkcj3l"/></g>`,
		"fallback": "withicons:sky-lantern-duo",
	});
}

export default Component;
