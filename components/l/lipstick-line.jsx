import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxb_82bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxb_82bqe"/>`,
		"fallback": "mingcute:lipstick-line",
	});
}

export default Component;
