import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzr7vhb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzr7vhb3e"/>`,
		"fallback": "ri:todo-line",
	});
}

export default Component;
