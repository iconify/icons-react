import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cs4bwi9xw.css';
import '../../css/a/adtocxbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cs4bwi9xw"/><path class="adtocxbdv"/></g>`,
		"fallback": "reicon:map-arrow-down-duotone",
	});
}

export default Component;
