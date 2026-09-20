import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu7a8ewfx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu7a8ewfx"/>`,
		"fallback": "teenyicons:minus-outline",
	});
}

export default Component;
