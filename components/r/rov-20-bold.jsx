import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpg9aibwt.css';
import '../../css/q/q3hpk7_5q.css';
import '../../css/u/u-2mnlbwy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpg9aibwt"/><path class="q3hpk7_5q"/><path class="u-2mnlbwy"/>`,
		"fallback": "energy-icons:rov-20-bold",
	});
}

export default Component;
