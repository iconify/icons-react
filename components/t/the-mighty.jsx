import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il_7-qbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il_7-qbuj"/>`,
		"fallback": "thesvg:the-mighty",
	});
}

export default Component;
