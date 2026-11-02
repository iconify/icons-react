import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng1wm4grq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng1wm4grq"/>`,
		"fallback": "mingcute:lightning-fill",
	});
}

export default Component;
