import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v1nvifbfe.css';
import '../../css/z/ztuc4y13g.css';
import '../../css/o/oqpk91bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v1nvifbfe"/><path class="ztuc4y13g"/><path clip-rule="evenodd" class="oqpk91bwl"/></g>`,
		"fallback": "reicon:minimize-square3",
	});
}

export default Component;
