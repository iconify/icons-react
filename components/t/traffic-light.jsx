import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hqyg-9bir.css';
import '../../css/p/p0q2sxjnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hqyg-9bir"/><path class="p0q2sxjnz wm-a"/></g>`,
		"fallback": "withicons:traffic-light",
	});
}

export default Component;
