import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v5y5gxn0v.css';
import '../../css/d/dqr6ghb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v5y5gxn0v"/><path class="dqr6ghb5v"/></g>`,
		"fallback": "hugeicons:pulse-rectangle-01",
	});
}

export default Component;
