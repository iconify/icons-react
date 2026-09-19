import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv3y_4b2h.css';
import '../../css/r/rhaxarb9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv3y_4b2h"/><path class="rhaxarb9o"/>`,
		"fallback": "fxemoji:sidewaysblackdownpointingindex",
	});
}

export default Component;
