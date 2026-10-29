import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j0ggkhb1g.css';
import '../../css/d/d5_gd2mux.css';
import '../../css/y/yo87urbrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j0ggkhb1g"/><path class="d5_gd2mux wm-a"/><path class="yo87urbrl"/></g>`,
		"fallback": "withicons:martini-duo",
	});
}

export default Component;
