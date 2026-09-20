import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gy_fflb5z.css';
import '../../css/i/i0om0jn_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gy_fflb5z"/><path clip-rule="evenodd" class="i0om0jn_o"/></g>`,
		"fallback": "reicon:washer2-filled",
	});
}

export default Component;
