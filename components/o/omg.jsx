import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0neh_e2d.css';
import '../../css/d/d-nab2bsn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="e0neh_e2d"/><path class="d-nab2bsn"/></g>`,
		"fallback": "cryptocurrency-color:omg",
	});
}

export default Component;
