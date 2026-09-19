import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ti3lcux8x.css';
import '../../css/g/gjjyej82e.css';
import '../../css/a/ae894nmnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ti3lcux8x"/><path clip-rule="evenodd" class="gjjyej82e"/><path clip-rule="evenodd" class="ae894nmnu"/></g>`,
		"fallback": "flowbite:volume-up-solid",
	});
}

export default Component;
