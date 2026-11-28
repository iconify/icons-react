import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxwgw6psx.css';
import '../../css/m/m4y5b__gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oxwgw6psx secondary"/><path class="m4y5b__gm primary"/></g>`,
		"fallback": "iconaut:pin-diagonal-duotone",
	});
}

export default Component;
