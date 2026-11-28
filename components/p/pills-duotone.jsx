import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ra_o_vb7o.css';
import '../../css/b/bfj59xmya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ra_o_vb7o secondary"/><path class="bfj59xmya primary"/></g>`,
		"fallback": "iconaut:pills-duotone",
	});
}

export default Component;
