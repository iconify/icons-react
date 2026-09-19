import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zaq8pz9zt.css';
import '../../css/t/tvsx6qbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zaq8pz9zt"/><path class="tvsx6qbqj"/></g>`,
		"fallback": "hugeicons:waves-arrow-up",
	});
}

export default Component;
