import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtk_9ha-x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtk_9ha-x"/>`,
		"fallback": "teenyicons:message-minus-outline",
	});
}

export default Component;
