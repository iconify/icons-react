import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppamt2b3k.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppamt2b3k"/>`,
		"fallback": "fa:reddit-square",
	});
}

export default Component;
