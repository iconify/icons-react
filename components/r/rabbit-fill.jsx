import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo5l02dsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo5l02dsq"/>`,
		"fallback": "mingcute:rabbit-fill",
	});
}

export default Component;
