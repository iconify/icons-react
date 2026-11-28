import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raqhdr7fb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raqhdr7fb"/>`,
		"fallback": "iconaut:message-square-text-solid",
	});
}

export default Component;
