import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqddq8bju.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqddq8bju"/>`,
		"fallback": "teenyicons:send-right-outline",
	});
}

export default Component;
