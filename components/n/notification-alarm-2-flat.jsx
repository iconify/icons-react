import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pl3au9b1n.css';
import '../../css/r/rgt8wo40q.css';
import '../../css/j/jkzq9lbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pl3au9b1n"/><path class="rgt8wo40q"/><path class="jkzq9lbgh"/></g>`,
		"fallback": "streamline-sharp-color:notification-alarm-2-flat",
	});
}

export default Component;
