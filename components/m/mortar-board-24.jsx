import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysl3ccail.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysl3ccail"/>`,
		"fallback": "octicon:mortar-board-24",
	});
}

export default Component;
