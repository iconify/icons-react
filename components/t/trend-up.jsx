import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ga8mdvb3k.css';
import '../../css/s/sc739gbdn.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ga8mdvb3k"/><path class="sc739gbdn"/><path class="rvymobzlx"/></g>`,
		"fallback": "reicon:trend-up",
	});
}

export default Component;
