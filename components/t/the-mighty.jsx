import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8uyn-bpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8uyn-bpt"/>`,
		"fallback": "thesvg-color:the-mighty",
	});
}

export default Component;
