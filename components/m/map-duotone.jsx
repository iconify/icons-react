import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_cos9brn.css';
import '../../css/h/ht8ggqupx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b_cos9brn"/><path class="ht8ggqupx"/></g>`,
		"fallback": "keyline-icons:map-duotone",
	});
}

export default Component;
