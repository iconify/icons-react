import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rqjr78hjn.css';
import '../../css/d/dch-8rb2n.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rqjr78hjn"/><path class="dch-8rb2n"/></g>`,
		"fallback": "pullo:tags-duotone",
	});
}

export default Component;
