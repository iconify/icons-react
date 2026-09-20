import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo734ib2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo734ib2j"/>`,
		"fallback": "reicon:task-filled",
	});
}

export default Component;
