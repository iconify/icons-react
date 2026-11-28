import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0ywf9-zb.css';
import '../../css/m/mf5bn8bke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0ywf9-zb secondary"/><path class="mf5bn8bke primary"/></g>`,
		"fallback": "iconaut:moon-haze-duotone",
	});
}

export default Component;
