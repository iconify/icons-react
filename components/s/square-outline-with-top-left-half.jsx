import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6zvrgbvy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6zvrgbvy"/>`,
		"fallback": "pinhead:square-outline-with-top-left-half",
	});
}

export default Component;
