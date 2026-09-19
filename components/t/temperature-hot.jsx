import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_7oc_qfd.css';
import '../../css/i/iv8niybgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a_7oc_qfd"/><path class="iv8niybgs"/></g>`,
		"fallback": "griddy-icons:temperature-hot",
	});
}

export default Component;
