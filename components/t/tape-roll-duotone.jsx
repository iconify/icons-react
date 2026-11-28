import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ux3qlgh3r.css';
import '../../css/s/s-u99mb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ux3qlgh3r"/><path class="primary s-u99mb5k"/></g>`,
		"fallback": "iconaut:tape-roll-duotone",
	});
}

export default Component;
