import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q19uih-go.css';
import '../../css/a/a0-g48brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q19uih-go"/><path class="a0-g48brp wm-a"/></g>`,
		"fallback": "withicons:pen-line",
	});
}

export default Component;
