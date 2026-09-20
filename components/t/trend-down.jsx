import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kemrslk0l.css';
import '../../css/n/n-hvnebxr.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kemrslk0l"/><path class="n-hvnebxr"/><path class="rvymobzlx"/></g>`,
		"fallback": "reicon:trend-down",
	});
}

export default Component;
