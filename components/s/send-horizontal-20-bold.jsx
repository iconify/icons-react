import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akipzwbge.css';
import '../../css/e/eimh7-87y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akipzwbge"/><path class="eimh7-87y"/>`,
		"fallback": "energy-icons:send-horizontal-20-bold",
	});
}

export default Component;
