import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zssh7obzr.css';
import '../../css/o/o1gawiknw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zssh7obzr"/><path class="o1gawiknw"/></g>`,
		"fallback": "reicon:triangle",
	});
}

export default Component;
