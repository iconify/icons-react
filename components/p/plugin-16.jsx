import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7ppq1bfs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t7ppq1bfs"/>`,
		"fallback": "qlementine-icons:plugin-16",
	});
}

export default Component;
