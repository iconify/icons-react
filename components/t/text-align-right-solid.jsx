import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m96ctz9ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m96ctz9ix"/>`,
		"fallback": "mynaui:text-align-right-solid",
	});
}

export default Component;
