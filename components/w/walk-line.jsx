import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slm4kib0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slm4kib0l"/>`,
		"fallback": "mingcute:walk-line",
	});
}

export default Component;
