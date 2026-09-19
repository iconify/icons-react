import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tknyikrqz.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tknyikrqz"/>`,
		"fallback": "zmdi:rotate-left",
	});
}

export default Component;
