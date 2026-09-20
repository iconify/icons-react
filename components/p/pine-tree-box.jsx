import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qszp67b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qszp67b6y"/>`,
		"fallback": "mdi:pine-tree-box",
	});
}

export default Component;
