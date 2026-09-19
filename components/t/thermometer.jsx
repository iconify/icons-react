import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/trm6bdboi.css';
import '../../css/l/lra3elwnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="trm6bdboi"/><path class="lra3elwnp"/></g>`,
		"fallback": "griddy-icons:thermometer",
	});
}

export default Component;
