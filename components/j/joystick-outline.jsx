import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9773-b2t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9773-b2t"/>`,
		"fallback": "teenyicons:joystick-outline",
	});
}

export default Component;
