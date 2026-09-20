import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi7w48ugf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi7w48ugf"/>`,
		"fallback": "thesvg:persistent",
	});
}

export default Component;
