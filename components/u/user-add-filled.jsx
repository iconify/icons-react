import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/v/v6jjvrbbm.css';
import '../../css/k/k7o8k720p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="dtl23o_xq"/><path clip-rule="evenodd" class="v6jjvrbbm"/><path class="k7o8k720p"/></g>`,
		"fallback": "reicon:user-add-filled",
	});
}

export default Component;
