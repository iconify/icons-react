import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b288o1b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b288o1b6v"/>`,
		"fallback": "streamline-cyber:staircase-down-2",
	});
}

export default Component;
