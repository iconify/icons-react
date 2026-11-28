import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2op8cc7m.css';
import '../../css/a/alfvwt82g.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n2op8cc7m"/><path class="alfvwt82g"/></g>`,
		"fallback": "pullo:sort-alphabetical-descending-duotone",
	});
}

export default Component;
