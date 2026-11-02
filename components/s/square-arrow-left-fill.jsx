import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boi4y04jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boi4y04jk"/>`,
		"fallback": "mingcute:square-arrow-left-fill",
	});
}

export default Component;
