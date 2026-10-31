import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j36ac2b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j36ac2b3k"/>`,
		"fallback": "withicons:message-square-warning-gloss",
	});
}

export default Component;
