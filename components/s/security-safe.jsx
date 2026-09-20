import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z3nk4b14f.css';
import '../../css/t/tqk4-zjaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z3nk4b14f"/><path class="tqk4-zjaz"/></g>`,
		"fallback": "reicon:security-safe",
	});
}

export default Component;
