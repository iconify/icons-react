import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/etzv95ivj.css';
import '../../css/d/dhaor6i2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="etzv95ivj"/><path class="dhaor6i2u"/></g>`,
		"fallback": "hugeicons:passport",
	});
}

export default Component;
