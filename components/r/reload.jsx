import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dsdw4zbiz.css';
import '../../css/k/k4ub4p2ey.css';
import '../../css/b/bzxe9qa1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dsdw4zbiz"/><path class="k4ub4p2ey"/><path class="bzxe9qa1i"/></g>`,
		"fallback": "hugeicons:reload",
	});
}

export default Component;
