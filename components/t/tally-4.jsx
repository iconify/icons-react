import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dck9ixbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dck9ixbrm"/>`,
		"fallback": "lucide:tally-4",
	});
}

export default Component;
