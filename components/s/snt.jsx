import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ar1k5ibco.css';
import '../../css/e/ewb5dzbep.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ar1k5ibco"/><path class="ewb5dzbep"/></g>`,
		"fallback": "cryptocurrency-color:snt",
	});
}

export default Component;
