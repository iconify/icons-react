import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lww3o8b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lww3o8b6l"/>`,
		"fallback": "mingcute:trunk-line",
	});
}

export default Component;
