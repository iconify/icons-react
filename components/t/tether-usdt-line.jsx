import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi_htnp5m.css';
import '../../css/b/bvztumbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi_htnp5m"/><ellipse class="bvztumbiv"/>`,
		"fallback": "mingcute:tether-usdt-line",
	});
}

export default Component;
