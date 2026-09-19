import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf7qo0fud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tf7qo0fud"/>`,
		"fallback": "iconoir:quote-message-solid",
	});
}

export default Component;
