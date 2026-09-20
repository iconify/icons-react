import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujo66obxz.css';
import '../../css/q/q4yf1rbfs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujo66obxz"/><path class="q4yf1rbfs"/>`,
		"fallback": "octicon:tab-external-16",
	});
}

export default Component;
