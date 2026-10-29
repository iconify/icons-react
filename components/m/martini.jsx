import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yo87urbrl.css';
import '../../css/d/d5_gd2mux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yo87urbrl"/><path class="d5_gd2mux wm-a"/></g>`,
		"fallback": "withicons:martini",
	});
}

export default Component;
