import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta3apzbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta3apzbdj"/>`,
		"fallback": "guidance:luggage",
	});
}

export default Component;
