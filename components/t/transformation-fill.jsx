import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1h7f4f6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1h7f4f6x"/>`,
		"fallback": "mingcute:transformation-fill",
	});
}

export default Component;
