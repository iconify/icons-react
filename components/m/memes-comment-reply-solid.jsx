import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq2xs6b2z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jq2xs6b2z"/>`,
		"fallback": "streamline-plump:memes-comment-reply-solid",
	});
}

export default Component;
