import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aanrx1ttf.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aanrx1ttf"/>`,
		"fallback": "whh:nexus",
	});
}

export default Component;
