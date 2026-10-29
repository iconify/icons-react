import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c1xzn3b5a.css';
import '../../css/s/sxdzfouvy.css';
import '../../css/q/qoz-d9jye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c1xzn3b5a"/><path class="sxdzfouvy wm-a"/><path class="qoz-d9jye wm-s"/></g>`,
		"fallback": "withicons:sunrise",
	});
}

export default Component;
