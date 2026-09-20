import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiq8g1b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiq8g1b9z"/>`,
		"fallback": "proicons:math",
	});
}

export default Component;
