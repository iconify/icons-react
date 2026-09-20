import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8qxznboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8qxznboh"/>`,
		"fallback": "mdi-light:message-reply",
	});
}

export default Component;
