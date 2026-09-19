import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/si-a9zb2q.css';
import '../../css/j/jkttq8bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="si-a9zb2q"/><path class="jkttq8bhn"/></g>`,
		"fallback": "hugeicons:square-m",
	});
}

export default Component;
