import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwp_ibcvr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwp_ibcvr"/>`,
		"fallback": "teenyicons:message-solid",
	});
}

export default Component;
