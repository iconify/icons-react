import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w62ongbbh.css';
import '../../css/s/s5lq88bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w62ongbbh"/><path class="s5lq88bmy"/></g>`,
		"fallback": "solar:square-alt-arrow-left-bold-duotone",
	});
}

export default Component;
