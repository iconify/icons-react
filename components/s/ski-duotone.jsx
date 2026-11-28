import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l78ypgfod.css';
import '../../css/x/xlz9upbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l78ypgfod secondary"/><path class="primary xlz9upbyr"/></g>`,
		"fallback": "iconaut:ski-duotone",
	});
}

export default Component;
