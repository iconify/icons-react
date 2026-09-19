import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8xvvwglv.css';
import '../../css/p/p__g4pb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8xvvwglv"/><path class="p__g4pb1v"/>`,
		"fallback": "circum:save-up-1",
	});
}

export default Component;
