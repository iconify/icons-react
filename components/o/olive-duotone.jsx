import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eq3hahmpi.css';
import '../../css/g/gtlk63bax.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eq3hahmpi"/><path class="gtlk63bax"/></g>`,
		"fallback": "pullo:olive-duotone",
	});
}

export default Component;
