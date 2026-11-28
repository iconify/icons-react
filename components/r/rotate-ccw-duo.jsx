import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kqgg-bcmh.css';
import '../../css/g/ghqej0qqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kqgg-bcmh"/><path class="ghqej0qqa"/></g>`,
		"fallback": "iconaut:rotate-ccw-duo",
	});
}

export default Component;
