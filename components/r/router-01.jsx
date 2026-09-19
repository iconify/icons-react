import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hedu6uv9e.css';
import '../../css/l/l2a2w4bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hedu6uv9e"/><path class="l2a2w4bdh"/></g>`,
		"fallback": "hugeicons:router-01",
	});
}

export default Component;
