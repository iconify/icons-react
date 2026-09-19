import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/szo0mhirz.css';
import '../../css/b/b0i1xcb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="szo0mhirz"/><path class="b0i1xcb_z"/></g>`,
		"fallback": "flowbite:react-solid",
	});
}

export default Component;
