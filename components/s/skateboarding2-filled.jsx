import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjec4noqj.css';
import '../../css/j/ju5f01sxb.css';
import '../../css/l/l5n-meb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yjec4noqj"/><path clip-rule="evenodd" class="ju5f01sxb"/><path class="l5n-meb4i"/></g>`,
		"fallback": "reicon:skateboarding2-filled",
	});
}

export default Component;
