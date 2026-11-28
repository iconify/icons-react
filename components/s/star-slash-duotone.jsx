import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nw4_41b1c.css';
import '../../css/k/kh_sh14vd.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nw4_41b1c"/><path class="kh_sh14vd"/></g>`,
		"fallback": "pullo:star-slash-duotone",
	});
}

export default Component;
