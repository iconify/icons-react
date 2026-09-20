import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_un217oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_un217oy"/>`,
		"fallback": "ri:money-dollar-circle-line",
	});
}

export default Component;
