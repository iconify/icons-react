import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7a3s1b6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7a3s1b6j"/>`,
		"fallback": "iconaut:message-square-sparkles-solid",
	});
}

export default Component;
