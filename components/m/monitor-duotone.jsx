import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bayuykboi.css';
import '../../css/y/ycs27b4fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bayuykboi"/><path class="ycs27b4fv"/></g>`,
		"fallback": "reicon:monitor-duotone",
	});
}

export default Component;
