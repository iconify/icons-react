import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thz9ypb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thz9ypb0k"/>`,
		"fallback": "iconaut:message-square-code-solid",
	});
}

export default Component;
