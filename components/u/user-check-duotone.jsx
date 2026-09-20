import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d4z8ksbxz.css';
import '../../css/o/o_0l1hoku.css';
import '../../css/g/gl06rbblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d4z8ksbxz"/><path clip-rule="evenodd" class="o_0l1hoku"/><path class="gl06rbblb"/></g>`,
		"fallback": "reicon:user-check-duotone",
	});
}

export default Component;
