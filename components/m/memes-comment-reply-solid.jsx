import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro8o2ub6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ro8o2ub6p"/>`,
		"fallback": "streamline-sharp:memes-comment-reply-solid",
	});
}

export default Component;
