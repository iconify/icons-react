import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxxo1bbhf.css';

const viewBox = {"width":770,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxxo1bbhf"/>`,
		"fallback": "whh:tagvertical",
	});
}

export default Component;
