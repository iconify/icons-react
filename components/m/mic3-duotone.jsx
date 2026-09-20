import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtmxuwkrn.css';
import '../../css/c/c6hp6_34w.css';
import '../../css/s/se3xhebza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gtmxuwkrn"/><path clip-rule="evenodd" class="c6hp6_34w"/><path class="se3xhebza"/></g>`,
		"fallback": "reicon:mic3-duotone",
	});
}

export default Component;
