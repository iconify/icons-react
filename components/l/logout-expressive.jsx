import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rpl-55ojt.css';
import '../../css/u/ua74jdbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rpl-55ojt"/><path class="ua74jdbgg"/></g>`,
		"fallback": "nrk:logout-expressive",
	});
}

export default Component;
