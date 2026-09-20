import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn3tl47hd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fn3tl47hd"/>`,
		"fallback": "streamline-plump:user-feedback-heart-remix",
	});
}

export default Component;
