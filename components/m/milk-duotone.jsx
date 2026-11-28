import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bmcbke3zw.css';
import '../../css/v/v-ryx_b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bmcbke3zw secondary"/><path class="primary v-ryx_b7d"/></g>`,
		"fallback": "iconaut:milk-duotone",
	});
}

export default Component;
