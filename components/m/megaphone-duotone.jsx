import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tsx42c1sj.css';
import '../../css/m/m6ocwv9sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary tsx42c1sj"/><path class="m6ocwv9sv primary"/></g>`,
		"fallback": "iconaut:megaphone-duotone",
	});
}

export default Component;
