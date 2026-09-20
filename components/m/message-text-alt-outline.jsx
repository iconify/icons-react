import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exv1xebfo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exv1xebfo"/>`,
		"fallback": "teenyicons:message-text-alt-outline",
	});
}

export default Component;
