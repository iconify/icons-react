import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7l-3ibnf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y7l-3ibnf"/>`,
		"fallback": "streamline:user-sync-online-in-person-solid",
	});
}

export default Component;
