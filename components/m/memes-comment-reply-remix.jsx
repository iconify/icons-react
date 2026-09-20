import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/por2i3b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="por2i3b-z"/>`,
		"fallback": "streamline-sharp:memes-comment-reply-remix",
	});
}

export default Component;
