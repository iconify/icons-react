import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmp5e0b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmp5e0b6k"/>`,
		"fallback": "ri:thumb-down-line",
	});
}

export default Component;
