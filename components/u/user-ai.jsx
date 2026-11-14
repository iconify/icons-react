import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9_d-n63m.css';
import '../../css/d/d69dq8xij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o9_d-n63m"/><path class="d69dq8xij"/></g>`,
		"fallback": "hugeicons:user-ai",
	});
}

export default Component;
