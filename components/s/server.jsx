import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u9ev-sbak.css';
import '../../css/g/gc1hgwbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u9ev-sbak"/><path clip-rule="evenodd" class="gc1hgwbxc"/></g>`,
		"fallback": "gg:server",
	});
}

export default Component;
