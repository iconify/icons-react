import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5yodvbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5yodvbar"/>`,
		"fallback": "mingcute:layout-5-fill",
	});
}

export default Component;
