import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fplqo9wyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fplqo9wyw"/>`,
		"fallback": "gg:remote",
	});
}

export default Component;
