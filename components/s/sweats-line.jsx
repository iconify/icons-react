import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujdyuib7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujdyuib7n"/>`,
		"fallback": "mingcute:sweats-line",
	});
}

export default Component;
