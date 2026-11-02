import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqt_hn3mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqt_hn3mb"/>`,
		"fallback": "mingcute:memory-stick-line",
	});
}

export default Component;
