import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wguc8ibco.css';
import '../../css/r/rp4yd9bnd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wguc8ibco"/><path clip-rule="evenodd" class="rp4yd9bnd"/></g>`,
		"fallback": "pepicons:umbrella",
	});
}

export default Component;
