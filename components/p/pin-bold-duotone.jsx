import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qi7jgdq5v.css';
import '../../css/l/lq5l6nbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qi7jgdq5v"/><path class="lq5l6nbel"/></g>`,
		"fallback": "solar:pin-bold-duotone",
	});
}

export default Component;
