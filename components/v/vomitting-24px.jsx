import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ddko27b3l.css';
import '../../css/m/mlil1vg-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ddko27b3l"/><path clip-rule="evenodd" class="mlil1vg-o"/></g>`,
		"fallback": "healthicons:vomitting-24px",
	});
}

export default Component;
