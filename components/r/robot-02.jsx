import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yd7yrj1be.css';
import '../../css/q/qnsdjybnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yd7yrj1be"/><path class="qnsdjybnt"/></g>`,
		"fallback": "hugeicons:robot-02",
	});
}

export default Component;
