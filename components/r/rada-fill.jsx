import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0uhiy9nl.css';
import '../../css/z/zh4-9ldgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0uhiy9nl"/><path class="zh4-9ldgi"/>`,
		"fallback": "mingcute:rada-fill",
	});
}

export default Component;
