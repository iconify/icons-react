import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk4zrqh7w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk4zrqh7w"/>`,
		"fallback": "teenyicons:robot-outline",
	});
}

export default Component;
