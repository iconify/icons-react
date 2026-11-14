import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yf3u06bgo.css';
import '../../css/w/w23_2bcgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yf3u06bgo"/><path class="w23_2bcgk"/></g>`,
		"fallback": "hugeicons:message-done-01",
	});
}

export default Component;
