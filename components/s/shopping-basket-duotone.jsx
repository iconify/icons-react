import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bcyqb9b3d.css';
import '../../css/x/xrkj0sb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bcyqb9b3d secondary"/><path class="primary xrkj0sb4a"/></g>`,
		"fallback": "iconaut:shopping-basket-duotone",
	});
}

export default Component;
