import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/z/zgtn1h70d.css';
import '../../css/d/d5yzqcc7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="zgtn1h70d"/><path class="d5yzqcc7q"/></g>`,
		"fallback": "streamline-ultimate:office-building-double",
	});
}

export default Component;
