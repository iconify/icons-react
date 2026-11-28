import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lsrw9tstz.css';
import '../../css/o/o9b-ixbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lsrw9tstz secondary"/><path class="o9b-ixbkr primary"/></g>`,
		"fallback": "iconaut:printer-off-duotone",
	});
}

export default Component;
