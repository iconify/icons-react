import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zbc7-aboz.css';
import '../../css/g/gocd8bcys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zbc7-aboz"/><path class="gocd8bcys"/></g>`,
		"fallback": "solar:monitor-bold",
	});
}

export default Component;
