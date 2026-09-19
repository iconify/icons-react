import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twg3zq-7h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twg3zq-7h"/>`,
		"fallback": "cil:running",
	});
}

export default Component;
