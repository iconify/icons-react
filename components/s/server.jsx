import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z6pq8-lyq.css';
import '../../css/f/fy7ma7bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path clip-rule="evenodd" class="z6pq8-lyq"/><path class="fy7ma7bah"/></g>`,
		"fallback": "hugeicons:server",
	});
}

export default Component;
