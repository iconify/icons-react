import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5bjig3qg.css';
import '../../css/w/w9ts85b5q.css';
import '../../css/o/of5hjbcyj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5bjig3qg"/><path class="w9ts85b5q"/><path class="of5hjbcyj"/>`,
		"fallback": "energy-icons:lpg-tank-48",
	});
}

export default Component;
