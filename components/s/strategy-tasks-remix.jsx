import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca060d3pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ca060d3pm"/>`,
		"fallback": "streamline-sharp:strategy-tasks-remix",
	});
}

export default Component;
