import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bruc2q60i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bruc2q60i"/>`,
		"fallback": "withicons:message-circle-heart-gloss",
	});
}

export default Component;
