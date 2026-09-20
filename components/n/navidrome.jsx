import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvspe7bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvspe7bge"/>`,
		"fallback": "thesvg-color:navidrome",
	});
}

export default Component;
