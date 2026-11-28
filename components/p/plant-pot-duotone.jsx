import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hj2i_4bnw.css';
import '../../css/l/ljm9mc1hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hj2i_4bnw secondary"/><path class="ljm9mc1hp primary"/></g>`,
		"fallback": "iconaut:plant-pot-duotone",
	});
}

export default Component;
