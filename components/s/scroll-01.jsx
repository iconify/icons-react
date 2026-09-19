import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dyjrubnno.css';
import '../../css/v/v1xolceld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dyjrubnno"/><path class="v1xolceld"/></g>`,
		"fallback": "hugeicons:scroll-01",
	});
}

export default Component;
