import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvby8_i7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvby8_i7i"/>`,
		"fallback": "boxicons:laurel-wreath-filled",
	});
}

export default Component;
