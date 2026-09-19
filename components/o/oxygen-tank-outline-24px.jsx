import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nlo4tcbao.css';
import '../../css/i/iwiygnbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nlo4tcbao"/><path class="iwiygnbvr"/></g>`,
		"fallback": "healthicons:oxygen-tank-outline-24px",
	});
}

export default Component;
