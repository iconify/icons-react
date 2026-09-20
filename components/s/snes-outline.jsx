import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed5nshu1s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed5nshu1s"/>`,
		"fallback": "teenyicons:snes-outline",
	});
}

export default Component;
