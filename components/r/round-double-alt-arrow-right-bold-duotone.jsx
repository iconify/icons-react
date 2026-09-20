import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l80i0rb1m.css';
import '../../css/b/b_4i1abvz.css';
import '../../css/n/nns27rf0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l80i0rb1m"/><path class="b_4i1abvz"/><path class="nns27rf0a"/></g>`,
		"fallback": "solar:round-double-alt-arrow-right-bold-duotone",
	});
}

export default Component;
