import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sakakwsau.css';
import '../../css/n/nt0a1ybxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sakakwsau secondary"/><path class="nt0a1ybxd primary"/></g>`,
		"fallback": "iconaut:thumbs-down-duotone",
	});
}

export default Component;
