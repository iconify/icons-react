import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/ww9u19b0e.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ww9u19b0e"/><path class="rvymobzlx"/></g>`,
		"fallback": "reicon:task-square",
	});
}

export default Component;
