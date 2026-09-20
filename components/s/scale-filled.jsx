import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qp0tnpi4p.css';
import '../../css/z/zzegw0g_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qp0tnpi4p"/><path class="zzegw0g_i"/></g>`,
		"fallback": "reicon:scale-filled",
	});
}

export default Component;
