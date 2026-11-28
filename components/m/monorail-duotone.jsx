import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tltkj299a.css';
import '../../css/i/i56-sd6vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary tltkj299a"/><path class="i56-sd6vi primary"/></g>`,
		"fallback": "iconaut:monorail-duotone",
	});
}

export default Component;
