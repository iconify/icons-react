import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/b/ben3jv5qz.css';
import '../../css/o/onb-68b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="ben3jv5qz"/><path class="onb-68b4x"/></g>`,
		"fallback": "lets-icons:thumb-down",
	});
}

export default Component;
