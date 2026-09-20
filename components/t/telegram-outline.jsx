import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep2_iimky.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep2_iimky"/>`,
		"fallback": "teenyicons:telegram-outline",
	});
}

export default Component;
