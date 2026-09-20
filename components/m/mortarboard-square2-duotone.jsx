import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-06v8b3s.css';
import '../../css/j/j1whpvfgt.css';
import '../../css/n/nisg9rpsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c-06v8b3s"/><path class="j1whpvfgt"/><path class="nisg9rpsb"/></g>`,
		"fallback": "reicon:mortarboard-square2-duotone",
	});
}

export default Component;
