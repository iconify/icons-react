import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjhfi1b1h.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjhfi1b1h"/>`,
		"fallback": "lineicons:magnet",
	});
}

export default Component;
