import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/h/h3dnxabdk.css';
import '../../css/g/gy57zebbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="h3dnxabdk"/><path class="gy57zebbe"/></g>`,
		"fallback": "lets-icons:load-list-alt",
	});
}

export default Component;
