import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq0ehjb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq0ehjb6l"/>`,
		"fallback": "simple-icons:paypal",
	});
}

export default Component;
