import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzp15iw1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzp15iw1o"/>`,
		"fallback": "mingcute:virus-line",
	});
}

export default Component;
