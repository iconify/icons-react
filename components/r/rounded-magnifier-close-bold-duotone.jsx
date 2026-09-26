import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_z2a8vzi.css';
import '../../css/n/nvp9ioxtn.css';
import '../../css/j/jq6fb3b7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="l_z2a8vzi"/><path class="nvp9ioxtn"/><path class="jq6fb3b7s"/></g>`,
		"fallback": "solar:rounded-magnifier-close-bold-duotone",
	});
}

export default Component;
