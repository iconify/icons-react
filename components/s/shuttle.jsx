import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9245d6ei.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9245d6ei"/>`,
		"fallback": "whh:shuttle",
	});
}

export default Component;
