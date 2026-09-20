import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3sal8b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3sal8b8a"/>`,
		"fallback": "mingcute:sun-cloudy-line",
	});
}

export default Component;
