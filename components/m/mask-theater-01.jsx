import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qej4dhb9q.css';
import '../../css/u/u0kq7ccsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qej4dhb9q"/><path class="u0kq7ccsy"/></g>`,
		"fallback": "hugeicons:mask-theater-01",
	});
}

export default Component;
