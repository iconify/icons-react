import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p92j7ub4n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p92j7ub4n"/>`,
		"fallback": "streamline-flex-color:timer-zero",
	});
}

export default Component;
