import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o2_7s2bcb.css';
import '../../css/r/rl9hk-b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o2_7s2bcb"/><path class="rl9hk-b7l"/></g>`,
		"fallback": "hugeicons:license-pin",
	});
}

export default Component;
