import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cqv3lrb0z.css';
import '../../css/w/wneoubc6n.css';
import '../../css/z/z-a4k4b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cqv3lrb0z"/><path class="wm-a wneoubc6n"/><path class="z-a4k4b8u"/></g>`,
		"fallback": "withicons:sprout-duo",
	});
}

export default Component;
