import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ov6aymbih.css';
import '../../css/j/j5qqge4bo.css';
import '../../css/s/sneccbb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ov6aymbih"/><path class="j5qqge4bo"/><path class="sneccbb6d"/></g>`,
		"fallback": "iconaut:type",
	});
}

export default Component;
