import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb1db1bfs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eb1db1bfs"/>`,
		"fallback": "healthicons:virus-research-alt",
	});
}

export default Component;
