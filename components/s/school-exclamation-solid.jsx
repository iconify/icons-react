import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dnlxmdbpb.css';
import '../../css/h/hgu6t-beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dnlxmdbpb"/><path clip-rule="evenodd" class="hgu6t-beq"/></g>`,
		"fallback": "flowbite:school-exclamation-solid",
	});
}

export default Component;
