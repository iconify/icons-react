import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/u/u-8jrx5yq.css';
import '../../css/v/vvyggphbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="dtl23o_xq"/><path clip-rule="evenodd" class="u-8jrx5yq"/><path class="vvyggphbz"/></g>`,
		"fallback": "reicon:user-minus2-duotone",
	});
}

export default Component;
