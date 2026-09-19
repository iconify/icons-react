import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2w5z4str.css';
import '../../css/b/bcmzn-obx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2w5z4str"/><path class="bcmzn-obx"/>`,
		"fallback": "boxicons:rugby-ball",
	});
}

export default Component;
