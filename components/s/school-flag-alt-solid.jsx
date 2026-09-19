import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ixat7proj.css';
import '../../css/l/lyvxmduej.css';
import '../../css/m/m63f0bc6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ixat7proj"/><path clip-rule="evenodd" class="lyvxmduej"/><path class="m63f0bc6j"/></g>`,
		"fallback": "flowbite:school-flag-alt-solid",
	});
}

export default Component;
