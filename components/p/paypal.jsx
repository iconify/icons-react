import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho27gbcyv.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho27gbcyv"/>`,
		"fallback": "whh:paypal",
	});
}

export default Component;
