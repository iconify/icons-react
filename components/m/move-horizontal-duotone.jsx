import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z7c-zdsig.css';
import '../../css/u/u0wgeccrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary z7c-zdsig"/><path class="primary u0wgeccrv"/></g>`,
		"fallback": "iconaut:move-horizontal-duotone",
	});
}

export default Component;
