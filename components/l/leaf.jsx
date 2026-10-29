import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pg6c6hbqu.css';
import '../../css/m/mp77goa1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pg6c6hbqu"/><path class="mp77goa1w wm-a"/></g>`,
		"fallback": "withicons:leaf",
	});
}

export default Component;
