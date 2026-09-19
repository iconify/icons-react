import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js103e65u.css';

const viewBox = {"width":376,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js103e65u"/>`,
		"fallback": "ps:mic-off",
	});
}

export default Component;
