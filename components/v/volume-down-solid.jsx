import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cvjx6tz9i.css';
import '../../css/o/oi-ra0bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cvjx6tz9i"/><path clip-rule="evenodd" class="oi-ra0bho"/></g>`,
		"fallback": "flowbite:volume-down-solid",
	});
}

export default Component;
