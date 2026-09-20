import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9ln-r5qf.css';
import '../../css/a/a9h_e8l4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o9ln-r5qf"/><path class="a9h_e8l4m"/></g>`,
		"fallback": "solar:link-square-linear",
	});
}

export default Component;
