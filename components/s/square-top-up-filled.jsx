import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l5n71k86n.css';
import '../../css/l/ldhfod5ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l5n71k86n"/><path class="ldhfod5ez"/></g>`,
		"fallback": "reicon:square-top-up-filled",
	});
}

export default Component;
