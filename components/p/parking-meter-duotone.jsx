import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-i_u6bis.css';
import '../../css/w/w0sp97bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s-i_u6bis secondary"/><path class="primary w0sp97bbv"/></g>`,
		"fallback": "iconaut:parking-meter-duotone",
	});
}

export default Component;
