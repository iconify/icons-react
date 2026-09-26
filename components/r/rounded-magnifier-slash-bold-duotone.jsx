import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_z2a8vzi.css';
import '../../css/d/d5tljviqd.css';
import '../../css/v/vxe9koteb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="l_z2a8vzi"/><path class="d5tljviqd"/><path class="vxe9koteb"/></g>`,
		"fallback": "solar:rounded-magnifier-slash-bold-duotone",
	});
}

export default Component;
