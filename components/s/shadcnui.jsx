import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipku0rblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipku0rblf"/>`,
		"fallback": "simple-icons:shadcnui",
	});
}

export default Component;
