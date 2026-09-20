import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhnn1_t4i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhnn1_t4i"/>`,
		"fallback": "selfhst:recyclarr-light",
	});
}

export default Component;
