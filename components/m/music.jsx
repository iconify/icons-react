import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o88ykrvvz.css';
import '../../css/w/wwhsvn6bz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="o88ykrvvz"/><circle class="wwhsvn6bz"/><polyline points="6.25 12 6.25 2.75 14.25 1.75 14.25 11"/></g>`,
		"fallback": "charm:music",
	});
}

export default Component;
