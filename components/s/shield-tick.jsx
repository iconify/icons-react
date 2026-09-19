import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qh8mg-b3r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qh8mg-b3r"/><polyline points="5.75 7.75 7.25 9.25 10.25 5.75"/></g>`,
		"fallback": "charm:shield-tick",
	});
}

export default Component;
