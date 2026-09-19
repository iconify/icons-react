import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrrju3b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrrju3b8j"/>`,
		"fallback": "bxs:message-alt-x",
	});
}

export default Component;
