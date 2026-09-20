import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy6hdmbvr.css';
import '../../css/q/qfu31qb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy6hdmbvr"/><path class="qfu31qb2b"/>`,
		"fallback": "mingcute:scissors-3-line",
	});
}

export default Component;
