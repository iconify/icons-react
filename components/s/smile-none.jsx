import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jfluyhf_z.css';
import '../../css/y/yhvfwbe3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jfluyhf_z"/><path clip-rule="evenodd" class="yhvfwbe3i"/></g>`,
		"fallback": "gg:smile-none",
	});
}

export default Component;
