import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3wm8ghmk.css';
import '../../css/c/c6ogy1b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3wm8ghmk"/><path class="c6ogy1b5a"/>`,
		"fallback": "uim:telegram",
	});
}

export default Component;
