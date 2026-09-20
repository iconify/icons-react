import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm41kn5-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm41kn5-m"/>`,
		"fallback": "thesvg-color:monkey-tie",
	});
}

export default Component;
