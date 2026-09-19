import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ylpqz2y1r.css';
import '../../css/u/u1t-g0b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ylpqz2y1r"/><path class="u1t-g0b2q"/></g>`,
		"fallback": "hugeicons:renewable-energy-01",
	});
}

export default Component;
