import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov2t5ibwt.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov2t5ibwt"/>`,
		"fallback": "iwwa:text-asc",
	});
}

export default Component;
