import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ty-zevz5w.css';
import '../../css/o/o3avh5bju.css';
import '../../css/s/sm0skf1-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ty-zevz5w"/><path class="o3avh5bju"/><path class="sm0skf1-z"/></g>`,
		"fallback": "solar:user-hands-bold-duotone",
	});
}

export default Component;
