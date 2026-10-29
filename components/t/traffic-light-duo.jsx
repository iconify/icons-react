import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/np63e2b1o.css';
import '../../css/p/p0q2sxjnz.css';
import '../../css/h/hqyg-9bir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="np63e2b1o"/><path class="p0q2sxjnz wm-a"/><path class="hqyg-9bir"/></g>`,
		"fallback": "withicons:traffic-light-duo",
	});
}

export default Component;
