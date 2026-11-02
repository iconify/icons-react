import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8dax6a8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8dax6a8q"/>`,
		"fallback": "mingcute:snowstorm-fill",
	});
}

export default Component;
