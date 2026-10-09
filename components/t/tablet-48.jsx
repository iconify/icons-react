import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzvt794yl.css';
import '../../css/u/ubmyk0c4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzvt794yl"/><path class="ubmyk0c4u"/>`,
		"fallback": "energy-icons:tablet-48",
	});
}

export default Component;
