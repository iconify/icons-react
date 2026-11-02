import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyzcv3rvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyzcv3rvq"/>`,
		"fallback": "mingcute:pause-circle-line",
	});
}

export default Component;
