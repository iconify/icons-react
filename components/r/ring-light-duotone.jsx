import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nh_ez6bar.css';
import '../../css/b/b2b_inbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nh_ez6bar secondary"/><path class="b2b_inbre primary"/></g>`,
		"fallback": "iconaut:ring-light-duotone",
	});
}

export default Component;
