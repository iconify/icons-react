import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rbiv8ibjl.css';
import '../../css/a/au4m5ubla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rbiv8ibjl secondary"/><path class="au4m5ubla primary"/></g>`,
		"fallback": "iconaut:toaster-duotone",
	});
}

export default Component;
