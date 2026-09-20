import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6-b8lbmz.css';
import '../../css/n/nyvfzccqy.css';
import '../../css/j/j8kuw0sgj.css';
import '../../css/v/vnbx2b2zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y6-b8lbmz"/><path class="nyvfzccqy"/><path class="j8kuw0sgj"/><path class="vnbx2b2zx"/></g>`,
		"fallback": "solar:smile-square-bold-duotone",
	});
}

export default Component;
