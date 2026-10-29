import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u1jdk2vpr.css';
import '../../css/e/e--mbmb3x.css';
import '../../css/d/d59m1yvcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u1jdk2vpr"/><path class="e--mbmb3x wm-a"/><path class="d59m1yvcb"/></g>`,
		"fallback": "withicons:signpost-duo",
	});
}

export default Component;
