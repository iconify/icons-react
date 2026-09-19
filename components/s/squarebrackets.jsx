import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxkye7b3h.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxkye7b3h"/>`,
		"fallback": "whh:squarebrackets",
	});
}

export default Component;
