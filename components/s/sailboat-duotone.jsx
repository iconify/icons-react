import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cbe9hbclu.css';
import '../../css/i/i-j92mbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cbe9hbclu secondary"/><path class="i-j92mbld primary"/></g>`,
		"fallback": "iconaut:sailboat-duotone",
	});
}

export default Component;
