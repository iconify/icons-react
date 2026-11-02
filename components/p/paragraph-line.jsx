import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mswc7wb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mswc7wb0l"/>`,
		"fallback": "mingcute:paragraph-line",
	});
}

export default Component;
