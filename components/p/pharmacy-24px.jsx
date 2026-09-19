import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yb6325_fu.css';
import '../../css/n/n1krokbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yb6325_fu"/><path class="n1krokbnd"/></g>`,
		"fallback": "healthicons:pharmacy-24px",
	});
}

export default Component;
