import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngrcr4m5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngrcr4m5m"/>`,
		"fallback": "mingcute:siri-frame-fill",
	});
}

export default Component;
