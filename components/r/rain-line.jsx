import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjgr2hbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjgr2hbwh"/>`,
		"fallback": "mingcute:rain-line",
	});
}

export default Component;
