import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8pphob5k.css';
import '../../css/l/lgx24tszc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g8pphob5k secondary"/><path class="lgx24tszc primary"/></g>`,
		"fallback": "iconaut:vine-duotone",
	});
}

export default Component;
