import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu3rknbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu3rknbjs"/>`,
		"fallback": "uil:twitter-alt",
	});
}

export default Component;
