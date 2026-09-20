import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2otf6b0c.css';
import '../../css/n/nssxc4uxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d2otf6b0c"/><path class="nssxc4uxg"/></g>`,
		"fallback": "mynaui:motorbike-package-solid",
	});
}

export default Component;
