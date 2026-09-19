import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g9bey28zn.css';
import '../../css/y/yqzoaebpl.css';
import '../../css/j/j1p0qwbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g9bey28zn"/><path class="yqzoaebpl"/><path class="j1p0qwbzu"/></g>`,
		"fallback": "iconoir:polar-sh",
	});
}

export default Component;
