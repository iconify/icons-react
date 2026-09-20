import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yw7q8ybgh.css';
import '../../css/d/dru14u-wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yw7q8ybgh"/><path class="dru14u-wi"/></g>`,
		"fallback": "reicon:settings-duotone",
	});
}

export default Component;
