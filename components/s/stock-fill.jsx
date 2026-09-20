import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thbkw0bko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thbkw0bko"/>`,
		"fallback": "ri:stock-fill",
	});
}

export default Component;
