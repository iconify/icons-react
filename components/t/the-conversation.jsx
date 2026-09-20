import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urb03ss5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urb03ss5j"/>`,
		"fallback": "thesvg-color:the-conversation",
	});
}

export default Component;
