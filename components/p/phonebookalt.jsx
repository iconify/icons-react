import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg8u_7bry.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg8u_7bry"/>`,
		"fallback": "whh:phonebookalt",
	});
}

export default Component;
