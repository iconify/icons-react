import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r41hdccti.css';
import '../../css/z/zcv2kackk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r41hdccti secondary"/><path class="primary zcv2kackk"/></g>`,
		"fallback": "iconaut:printer-duotone",
	});
}

export default Component;
