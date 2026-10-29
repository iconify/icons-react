import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xrfn3bcyz.css';
import '../../css/q/q53cmxb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xrfn3bcyz"/><path class="q53cmxb6m wm-a"/></g>`,
		"fallback": "withicons:shield-user",
	});
}

export default Component;
