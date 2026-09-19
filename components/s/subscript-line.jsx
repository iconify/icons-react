import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb9qjw3fz.css';
import '../../css/y/yd1q8xhfp.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb9qjw3fz clr-i-outline clr-i-outline-path-1"/><path class="clr-i-outline clr-i-outline-path-2 yd1q8xhfp"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:subscript-line",
	});
}

export default Component;
