import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b-u7_9jwl.css';
import '../../css/w/wn3v1l47v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b-u7_9jwl"/><path class="wn3v1l47v"/></g>`,
		"fallback": "hugeicons:notification-square",
	});
}

export default Component;
