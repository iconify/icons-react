import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/akdhajbkm.css';
import '../../css/y/ypv2i4gvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="akdhajbkm"/><path class="ypv2i4gvl"/></g>`,
		"fallback": "reicon:sofa3-duotone",
	});
}

export default Component;
