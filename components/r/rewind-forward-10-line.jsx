import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1vun7bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1vun7bwn"/>`,
		"fallback": "mingcute:rewind-forward-10-line",
	});
}

export default Component;
