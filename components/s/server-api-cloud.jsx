import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9cqw4--n.css';
import '../../css/t/t13bqvb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h9cqw4--n"/><path class="t13bqvb6b"/></g>`,
		"fallback": "streamline-freehand-color:server-api-cloud",
	});
}

export default Component;
