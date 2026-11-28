import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlfcv1bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlfcv1bfs"/>`,
		"fallback": "noviair-light:users-x",
	});
}

export default Component;
