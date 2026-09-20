import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/u/uf2u5_g9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="dtl23o_xq"/><path class="uf2u5_g9a"/></g>`,
		"fallback": "reicon:user-filled",
	});
}

export default Component;
