import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfy-2kbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfy-2kbls"/>`,
		"fallback": "mingcute:low-temperature-fill",
	});
}

export default Component;
