import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu8lg6sbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu8lg6sbr"/>`,
		"fallback": "withicons:message-circle-more-gloss",
	});
}

export default Component;
