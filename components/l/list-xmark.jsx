import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vfx4hwblx.css';
import '../../css/y/y_1jdug8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vfx4hwblx"/><path class="y_1jdug8v"/></g>`,
		"fallback": "nrk:list-xmark",
	});
}

export default Component;
