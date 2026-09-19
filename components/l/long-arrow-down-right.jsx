import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yl3t4xw1v.css';
import '../../css/g/ga1a-bc8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yl3t4xw1v"/><path class="ga1a-bc8s"/></g>`,
		"fallback": "iconoir:long-arrow-down-right",
	});
}

export default Component;
