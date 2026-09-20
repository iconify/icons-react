import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2_0eeu6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2_0eeu6q"/>`,
		"fallback": "mingcute:wash-machine-line",
	});
}

export default Component;
