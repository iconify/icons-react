import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3rlx0bot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3rlx0bot"/>`,
		"fallback": "simple-icons:sidequest",
	});
}

export default Component;
