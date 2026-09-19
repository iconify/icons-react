import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qdif0rbop.css';
import '../../css/h/hsdor7bvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qdif0rbop"/><path class="hsdor7bvi"/></g>`,
		"fallback": "hugeicons:pizza-04",
	});
}

export default Component;
