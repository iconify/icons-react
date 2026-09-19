import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pno7edbeh.css';
import '../../css/j/j6n_w-bfj.css';
import '../../css/y/yf36aqb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pno7edbeh"/><path class="j6n_w-bfj"/><path class="yf36aqb7r"/></g>`,
		"fallback": "hugeicons:shopping-bag-03",
	});
}

export default Component;
