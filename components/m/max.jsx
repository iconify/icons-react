import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m79uk6b5q.css';
import '../../css/v/v5u0u1qno.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="m79uk6b5q"/><path class="v5u0u1qno"/></g>`,
		"fallback": "cryptocurrency-color:max",
	});
}

export default Component;
