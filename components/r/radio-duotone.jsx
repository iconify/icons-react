import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8weoab3j.css';
import '../../css/k/kcy29-bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u8weoab3j"/><path class="kcy29-bgb primary"/></g>`,
		"fallback": "iconaut:radio-duotone",
	});
}

export default Component;
