import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xe65wvb-d.css';
import '../../css/c/c3wgojkty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xe65wvb-d"/><path class="c3wgojkty wm-s"/></g>`,
		"fallback": "withicons:list-plus",
	});
}

export default Component;
