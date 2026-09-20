import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guacuabyw.css';
import '../../css/w/wqgx4hy9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guacuabyw"/><path class="wqgx4hy9o"/>`,
		"fallback": "mingcute:open-door-line",
	});
}

export default Component;
