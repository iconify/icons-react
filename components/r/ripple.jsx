import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwzoj1brt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwzoj1brt"/>`,
		"fallback": "thesvg-color:ripple",
	});
}

export default Component;
