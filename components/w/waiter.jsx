import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fx7c7xj_y.css';
import '../../css/k/k-9ubd0cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fx7c7xj_y"/><path class="k-9ubd0cn"/></g>`,
		"fallback": "hugeicons:waiter",
	});
}

export default Component;
