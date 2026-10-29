import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nuu7pj2tk.css';
import '../../css/a/agr8unbte.css';
import '../../css/l/la1njcbhy.css';
import '../../css/w/wawkbcc0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nuu7pj2tk"/><path class="agr8unbte wm-a"/><path class="la1njcbhy"/><path class="wawkbcc0p wm-a"/></g>`,
		"fallback": "withicons:pencil-ruler-duo",
	});
}

export default Component;
