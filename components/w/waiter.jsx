import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fx7c7xj_y.css';
import '../../css/l/l-6ayjafb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fx7c7xj_y"/><path class="l-6ayjafb"/></g>`,
		"fallback": "hugeicons:waiter",
	});
}

export default Component;
