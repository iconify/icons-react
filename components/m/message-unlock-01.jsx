import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/px3alub5r.css';
import '../../css/x/xwlhkilrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="px3alub5r"/><path class="xwlhkilrp"/></g>`,
		"fallback": "hugeicons:message-unlock-01",
	});
}

export default Component;
