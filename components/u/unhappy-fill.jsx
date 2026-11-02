import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j71x9tmmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j71x9tmmq"/>`,
		"fallback": "mingcute:unhappy-fill",
	});
}

export default Component;
