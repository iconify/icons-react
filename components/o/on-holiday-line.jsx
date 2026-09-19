import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcw9l3bkd.css';
import '../../css/c/cmarxq79e.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcw9l3bkd"/><path class="cmarxq79e"/>`,
		"fallback": "clarity:on-holiday-line",
	});
}

export default Component;
