import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llcarc34f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llcarc34f"/>`,
		"fallback": "mingcute:layout-9-line",
	});
}

export default Component;
