import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cimf4bblu.css';
import '../../css/w/wcw8hj87u.css';
import '../../css/k/kz5pr1h-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cimf4bblu"/><path class="wcw8hj87u"/><path class="kz5pr1h-q"/></g>`,
		"fallback": "hugeicons:stack-star",
	});
}

export default Component;
