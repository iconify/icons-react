import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyykz9z8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyykz9z8a"/>`,
		"fallback": "mingcute:pencil-2-line",
	});
}

export default Component;
