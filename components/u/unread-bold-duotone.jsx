import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wfnzs_z4j.css';
import '../../css/f/fng07cz9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wfnzs_z4j"/><path class="fng07cz9i"/></g>`,
		"fallback": "solar:unread-bold-duotone",
	});
}

export default Component;
