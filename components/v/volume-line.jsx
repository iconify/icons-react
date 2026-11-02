import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og74i3xnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og74i3xnm"/>`,
		"fallback": "mingcute:volume-line",
	});
}

export default Component;
