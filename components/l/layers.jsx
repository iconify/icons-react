import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ly52aibmo.css';
import '../../css/x/xrxaul_zl.css';
import '../../css/d/dv0ekmbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ly52aibmo"/><path class="xrxaul_zl"/><path class="dv0ekmbgh"/></g>`,
		"fallback": "mono-icons:layers",
	});
}

export default Component;
