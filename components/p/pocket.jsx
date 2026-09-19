import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bigdckv_u.css';
import '../../css/z/z1rle4fds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bigdckv_u"/><path class="z1rle4fds"/></g>`,
		"fallback": "hugeicons:pocket",
	});
}

export default Component;
