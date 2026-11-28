import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch-u8ybhb.css';
import '../../css/f/fge1qtizn.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ch-u8ybhb"/><path class="fge1qtizn"/></g>`,
		"fallback": "pullo:turtle-duotone",
	});
}

export default Component;
