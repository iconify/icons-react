import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kudsvco-f.css';
import '../../css/x/xy363lbwj.css';
import '../../css/m/m56xxd2ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kudsvco-f"/><path class="xy363lbwj"/><path class="m56xxd2ev"/></g>`,
		"fallback": "solar:tag-price-bold-duotone",
	});
}

export default Component;
