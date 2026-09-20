import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rngmbwozf.css';
import '../../css/o/obx0gf1ft.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rngmbwozf"/><path class="obx0gf1ft"/>`,
		"fallback": "lineicons:mic",
	});
}

export default Component;
