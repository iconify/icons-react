import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_rdoab8o.css';
import '../../css/v/v3l_8mubl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d_rdoab8o"/><path clip-rule="evenodd" class="v3l_8mubl"/></g>`,
		"fallback": "nrk:user-avatar-expressive",
	});
}

export default Component;
