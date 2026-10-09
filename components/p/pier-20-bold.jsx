import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7txqyfjs.css';
import '../../css/p/px4lcrqbc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7txqyfjs"/><path class="px4lcrqbc"/>`,
		"fallback": "energy-icons:pier-20-bold",
	});
}

export default Component;
