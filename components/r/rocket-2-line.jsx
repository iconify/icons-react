import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfq1-iboq.css';
import '../../css/x/x0ws1hdqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfq1-iboq"/><path class="x0ws1hdqd"/>`,
		"fallback": "mingcute:rocket-2-line",
	});
}

export default Component;
