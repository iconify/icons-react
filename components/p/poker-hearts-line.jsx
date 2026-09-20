import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uie78-bmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uie78-bmn"/>`,
		"fallback": "ri:poker-hearts-line",
	});
}

export default Component;
