import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nohw-0bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nohw-0bfs"/>`,
		"fallback": "iconoir:rhombus-arrow-right-solid-solid",
	});
}

export default Component;
