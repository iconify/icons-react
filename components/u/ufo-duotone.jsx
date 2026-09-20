import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m6ll-b92i.css';
import '../../css/s/s8f6nvilz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m6ll-b92i"/><path class="s8f6nvilz"/></g>`,
		"fallback": "reicon:ufo-duotone",
	});
}

export default Component;
