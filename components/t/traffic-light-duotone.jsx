import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aa0-0bcfh.css';
import '../../css/l/l27h7_3-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aa0-0bcfh secondary"/><path class="l27h7_3-y primary"/></g>`,
		"fallback": "iconaut:traffic-light-duotone",
	});
}

export default Component;
