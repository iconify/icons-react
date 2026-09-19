import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swf451boi.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swf451boi"/>`,
		"fallback": "whh:psltwo",
	});
}

export default Component;
