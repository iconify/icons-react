import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ylec2ub1i.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/thqt1dbyk.css';
import '../../css/l/lot9ypbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ylec2ub1i"/><g class="mc2zb0bvp"><path class="thqt1dbyk"/><path class="lot9ypbnj"/></g></g>`,
		"fallback": "solar:sofa-2-bold-duotone",
	});
}

export default Component;
