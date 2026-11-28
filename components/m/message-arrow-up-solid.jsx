import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmtrv_blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmtrv_blu"/>`,
		"fallback": "iconaut:message-arrow-up-solid",
	});
}

export default Component;
