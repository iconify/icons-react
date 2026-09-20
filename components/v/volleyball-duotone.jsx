import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zooed6k3e.css';
import '../../css/u/u1jf1xrka.css';
import '../../css/d/dz1zod9hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zooed6k3e"/><path class="u1jf1xrka"/><path class="dz1zod9hv"/></g>`,
		"fallback": "reicon:volleyball-duotone",
	});
}

export default Component;
