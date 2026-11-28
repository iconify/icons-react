import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o36z5zbfl.css';
import '../../css/a/am4cq56ck.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o36z5zbfl"/><path class="am4cq56ck"/></g>`,
		"fallback": "pullo:postcard-duotone",
	});
}

export default Component;
