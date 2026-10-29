import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q3o42wsez.css';
import '../../css/v/vrvs2074r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q3o42wsez"/><path class="vrvs2074r wm-s"/></g>`,
		"fallback": "withicons:remove-formatting",
	});
}

export default Component;
