import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j4qvjhbhb.css';
import '../../css/o/o5tl1grlc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="j4qvjhbhb"/><path class="o5tl1grlc"/></g>`,
		"fallback": "keyline-icons:list-sharp",
	});
}

export default Component;
