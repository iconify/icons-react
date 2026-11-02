import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze1h-9r7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze1h-9r7q"/>`,
		"fallback": "mingcute:mushroom-line",
	});
}

export default Component;
