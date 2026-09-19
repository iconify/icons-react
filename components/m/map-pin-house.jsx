import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q07v-eb4l.css';
import '../../css/n/nu5ddkbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q07v-eb4l"/><path class="nu5ddkbyz"/></g>`,
		"fallback": "hugeicons:map-pin-house",
	});
}

export default Component;
