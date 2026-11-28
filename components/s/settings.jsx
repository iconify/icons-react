import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ll59ytbdg.css';
import '../../css/h/h9q9mhboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ll59ytbdg"/><circle class="h9q9mhboc"/></g>`,
		"fallback": "iconaut:settings",
	});
}

export default Component;
