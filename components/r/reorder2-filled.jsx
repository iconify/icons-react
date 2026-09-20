import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/go8a37ghg.css';
import '../../css/n/nokp8r6uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="go8a37ghg"/><path class="nokp8r6uo"/></g>`,
		"fallback": "reicon:reorder2-filled",
	});
}

export default Component;
