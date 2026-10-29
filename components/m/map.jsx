import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eoiz0rolg.css';
import '../../css/p/p2z9olxff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="eoiz0rolg"/><path class="p2z9olxff wm-a"/></g>`,
		"fallback": "withicons:map",
	});
}

export default Component;
