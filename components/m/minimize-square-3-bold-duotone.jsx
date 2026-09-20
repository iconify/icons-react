import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/h/h4yj3zdsk.css';
import '../../css/u/uj78dxbsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="h4yj3zdsk"/><path class="uj78dxbsw"/></g>`,
		"fallback": "solar:minimize-square-3-bold-duotone",
	});
}

export default Component;
