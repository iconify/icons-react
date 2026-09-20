import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/z/zpezh1bcy.css';
import '../../css/d/dibhb6bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="zpezh1bcy"/><path class="dibhb6bbk"/></g>`,
		"fallback": "solar:send-square-bold-duotone",
	});
}

export default Component;
