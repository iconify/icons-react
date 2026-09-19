import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el_f30bgi.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el_f30bgi"/>`,
		"fallback": "whh:panties",
	});
}

export default Component;
