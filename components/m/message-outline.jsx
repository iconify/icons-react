import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kln6l2-vx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kln6l2-vx"/>`,
		"fallback": "teenyicons:message-outline",
	});
}

export default Component;
