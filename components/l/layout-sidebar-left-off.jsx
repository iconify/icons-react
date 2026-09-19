import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk1oa_q5q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk1oa_q5q"/>`,
		"fallback": "codicon:layout-sidebar-left-off",
	});
}

export default Component;
