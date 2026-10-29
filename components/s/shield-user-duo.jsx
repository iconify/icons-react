import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e4rcsvbfj.css';
import '../../css/q/q53cmxb6m.css';
import '../../css/x/xrfn3bcyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e4rcsvbfj"/><path class="q53cmxb6m wm-a"/><path class="xrfn3bcyz"/></g>`,
		"fallback": "withicons:shield-user-duo",
	});
}

export default Component;
