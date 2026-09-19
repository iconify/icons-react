import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/movc4nh8l.css';
import '../../css/m/my00-3ele.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="movc4nh8l"/><path class="my00-3ele"/></g>`,
		"fallback": "heroicons-solid:rss",
	});
}

export default Component;
