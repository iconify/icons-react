import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_rh0mbxd.css';
import '../../css/p/ps_upsbky.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t_rh0mbxd"/><path clip-rule="evenodd" class="ps_upsbky"/></g>`,
		"fallback": "glyphs:tachometer-7-bold",
	});
}

export default Component;
