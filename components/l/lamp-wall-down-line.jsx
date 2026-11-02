import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lea21cbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lea21cbgo"/>`,
		"fallback": "mingcute:lamp-wall-down-line",
	});
}

export default Component;
