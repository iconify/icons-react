import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3ndrqb5l.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3ndrqb5l"/>`,
		"fallback": "whh:student",
	});
}

export default Component;
