import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vl26cwqhr.css';
import '../../css/j/jkttq8bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vl26cwqhr"/><path class="jkttq8bhn"/></g>`,
		"fallback": "hugeicons:square-m",
	});
}

export default Component;
