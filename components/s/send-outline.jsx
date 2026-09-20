import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aykwv9b4y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aykwv9b4y"/>`,
		"fallback": "teenyicons:send-outline",
	});
}

export default Component;
