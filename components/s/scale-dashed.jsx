import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngwd3n8cs.css';
import '../../css/m/m5ry8hbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ngwd3n8cs"/><path class="m5ry8hbjs"/></g>`,
		"fallback": "andrsrxn:scale-dashed",
	});
}

export default Component;
