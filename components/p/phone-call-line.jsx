import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2h20g36s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2h20g36s"/>`,
		"fallback": "mingcute:phone-call-line",
	});
}

export default Component;
