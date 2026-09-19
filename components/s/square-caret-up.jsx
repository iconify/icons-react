import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eia9bxwwm.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eia9bxwwm"/>`,
		"fallback": "fa6-regular:square-caret-up",
	});
}

export default Component;
