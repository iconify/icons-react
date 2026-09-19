import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ysj-cjt5h.css';
import '../../css/u/uavqmpb5x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="ysj-cjt5h"/><path class="uavqmpb5x"/></g>`,
		"fallback": "charm:padlock",
	});
}

export default Component;
