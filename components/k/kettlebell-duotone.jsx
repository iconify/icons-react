import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rh9np1gft.css';
import '../../css/y/yi8rzm8tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rh9np1gft secondary"/><path class="primary yi8rzm8tc"/></g>`,
		"fallback": "iconaut:kettlebell-duotone",
	});
}

export default Component;
