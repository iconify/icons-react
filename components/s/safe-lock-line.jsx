import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr7o1ig4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr7o1ig4m"/>`,
		"fallback": "mingcute:safe-lock-line",
	});
}

export default Component;
