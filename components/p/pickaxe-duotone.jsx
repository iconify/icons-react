import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gf44ljtvg.css';
import '../../css/o/oa0gvnxrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gf44ljtvg secondary"/><path class="oa0gvnxrw primary"/></g>`,
		"fallback": "iconaut:pickaxe-duotone",
	});
}

export default Component;
