import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgk69x2ft.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgk69x2ft"/>`,
		"fallback": "garden:phone-stroke-12",
	});
}

export default Component;
