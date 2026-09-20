import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/db9ouff7d.css';
import '../../css/o/oo6tk_lwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="db9ouff7d"/><path class="oo6tk_lwe"/></g>`,
		"fallback": "reicon:percentage-square",
	});
}

export default Component;
