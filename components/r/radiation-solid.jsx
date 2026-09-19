import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvgnh32ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dvgnh32ac"/>`,
		"fallback": "iconoir:radiation-solid",
	});
}

export default Component;
