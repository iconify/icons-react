import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s5r365bol.css';
import '../../css/u/uw9crg0us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s5r365bol"/><path class="uw9crg0us"/></g>`,
		"fallback": "flowbite:messages-solid",
	});
}

export default Component;
