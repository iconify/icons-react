import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzuilbm9s.css';
import '../../css/z/zi613j_mt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jzuilbm9s secondary"/><path class="primary zi613j_mt"/></g>`,
		"fallback": "iconaut:mail-shield-duotone",
	});
}

export default Component;
