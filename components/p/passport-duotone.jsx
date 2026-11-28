import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a9q4f0b9w.css';
import '../../css/f/f6uir55zz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a9q4f0b9w"/><path class="f6uir55zz"/></g>`,
		"fallback": "pullo:passport-duotone",
	});
}

export default Component;
