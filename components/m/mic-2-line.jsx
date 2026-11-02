import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb4qxybou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb4qxybou"/>`,
		"fallback": "mingcute:mic-2-line",
	});
}

export default Component;
