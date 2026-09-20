import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j0k0_xbrx.css';
import '../../css/m/msrl3pbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j0k0_xbrx"/><path class="msrl3pbyd"/></g>`,
		"fallback": "reicon:sort-h-duotone",
	});
}

export default Component;
