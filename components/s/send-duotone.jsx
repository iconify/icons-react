import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aas_fvb7h.css';
import '../../css/a/a4prgybwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aas_fvb7h secondary"/><path class="a4prgybwf primary"/></g>`,
		"fallback": "iconaut:send-duotone",
	});
}

export default Component;
