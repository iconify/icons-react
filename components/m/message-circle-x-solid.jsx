import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl1ouqb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl1ouqb0k"/>`,
		"fallback": "iconaut:message-circle-x-solid",
	});
}

export default Component;
