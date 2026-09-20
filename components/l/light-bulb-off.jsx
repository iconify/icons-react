import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yeyzig76z.css';
import '../../css/y/yb1m2ub0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yeyzig76z"/><path class="yb1m2ub0y"/></g>`,
		"fallback": "mage:light-bulb-off",
	});
}

export default Component;
