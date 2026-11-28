import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x507mczyr.css';
import '../../css/m/mkfkj9b3c.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x507mczyr"/><path class="mkfkj9b3c"/></g>`,
		"fallback": "pullo:user-x-duotone",
	});
}

export default Component;
