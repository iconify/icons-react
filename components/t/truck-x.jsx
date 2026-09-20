import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv5td14oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv5td14oz"/>`,
		"fallback": "keyline-icons:truck-x",
	});
}

export default Component;
