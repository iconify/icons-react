import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dsv06j1es.css';
import '../../css/r/rdh72bc_c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="dsv06j1es"/><path class="rdh72bc_c"/></g>`,
		"fallback": "cryptocurrency-color:qash",
	});
}

export default Component;
