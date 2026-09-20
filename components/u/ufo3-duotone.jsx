import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_m-jnb0n.css';
import '../../css/j/jpb9e8bik.css';
import '../../css/v/vg8-b5w0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z_m-jnb0n"/><path class="jpb9e8bik"/><path class="vg8-b5w0i"/></g>`,
		"fallback": "reicon:ufo3-duotone",
	});
}

export default Component;
