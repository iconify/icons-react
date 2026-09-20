import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vfdkm9bwe.css';
import '../../css/m/m2zm14-qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vfdkm9bwe"/><path class="m2zm14-qj"/></g>`,
		"fallback": "solar:list-check-bold-duotone",
	});
}

export default Component;
