import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1xjhib5f.css';
import '../../css/w/w9u096avl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g1xjhib5f"/><path class="w9u096avl"/></g>`,
		"fallback": "mynaui:location-user-solid",
	});
}

export default Component;
