import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-8jrx5yq.css';
import '../../css/k/k7o8k720p.css';
import '../../css/d/dtl23o_xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u-8jrx5yq"/><path class="k7o8k720p"/><circle class="dtl23o_xq"/></g>`,
		"fallback": "reicon:user-minus-filled",
	});
}

export default Component;
