import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l47v6gbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l47v6gbpt"/>`,
		"fallback": "stash:racket-ball-light",
	});
}

export default Component;
