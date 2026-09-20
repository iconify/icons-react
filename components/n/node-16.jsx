import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prz566bot.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prz566bot"/>`,
		"fallback": "octicon:node-16",
	});
}

export default Component;
