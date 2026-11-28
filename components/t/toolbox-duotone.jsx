import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c1lz2w3in.css';
import '../../css/s/s57tdebel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c1lz2w3in secondary"/><path class="primary s57tdebel"/></g>`,
		"fallback": "iconaut:toolbox-duotone",
	});
}

export default Component;
