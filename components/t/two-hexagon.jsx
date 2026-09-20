import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v07qy9b3z.css';
import '../../css/s/sts8xrb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v07qy9b3z"/><path class="sts8xrb0w"/></g>`,
		"fallback": "mynaui:two-hexagon",
	});
}

export default Component;
