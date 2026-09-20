import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo3hx7b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo3hx7b6s"/>`,
		"fallback": "thesvg:tui",
	});
}

export default Component;
