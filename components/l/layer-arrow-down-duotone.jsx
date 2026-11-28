import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zwgk4mbnh.css';
import '../../css/v/v_mvrud2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zwgk4mbnh"/><path class="primary v_mvrud2h"/></g>`,
		"fallback": "iconaut:layer-arrow-down-duotone",
	});
}

export default Component;
