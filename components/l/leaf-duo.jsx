import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/spqxaywrr.css';
import '../../css/m/mp77goa1w.css';
import '../../css/p/pg6c6hbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="spqxaywrr"/><path class="mp77goa1w wm-a"/><path class="pg6c6hbqu"/></g>`,
		"fallback": "withicons:leaf-duo",
	});
}

export default Component;
