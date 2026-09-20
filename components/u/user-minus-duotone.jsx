import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d4z8ksbxz.css';
import '../../css/g/gl06rbblb.css';
import '../../css/u/u-8jrx5yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d4z8ksbxz"/><path class="gl06rbblb"/><path clip-rule="evenodd" class="u-8jrx5yq"/></g>`,
		"fallback": "reicon:user-minus-duotone",
	});
}

export default Component;
