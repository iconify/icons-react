import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc1ropbpw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cc1ropbpw"/>`,
		"fallback": "streamline-plump:memes-comment-reply-remix",
	});
}

export default Component;
