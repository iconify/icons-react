import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylll0ecju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylll0ecju"/>`,
		"fallback": "mingcute:phone-block-fill",
	});
}

export default Component;
