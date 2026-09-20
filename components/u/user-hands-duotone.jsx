import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4pozuggt.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/i/io57_vhgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e4pozuggt"/><circle class="dtl23o_xq"/><path class="io57_vhgi"/></g>`,
		"fallback": "reicon:user-hands-duotone",
	});
}

export default Component;
