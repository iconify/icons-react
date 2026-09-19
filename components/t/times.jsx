import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u251qipre.css';
import '../../css/v/vu29nlc1n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u251qipre"/><path class="vu29nlc1n"/></g>`,
		"fallback": "pepicons:times",
	});
}

export default Component;
