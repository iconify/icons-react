import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fe5bu0nyt.css';
import '../../css/t/t3dd3wb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fe5bu0nyt"/><path class="t3dd3wb-r"/></g>`,
		"fallback": "reicon:remote2",
	});
}

export default Component;
