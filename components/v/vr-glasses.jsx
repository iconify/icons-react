import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f3w4d9kff.css';
import '../../css/n/nhv50tesc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f3w4d9kff"/><path class="nhv50tesc"/></g>`,
		"fallback": "hugeicons:vr-glasses",
	});
}

export default Component;
