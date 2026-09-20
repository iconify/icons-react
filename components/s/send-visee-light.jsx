import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae433abpx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae433abpx"/>`,
		"fallback": "selfhst:send-visee-light",
	});
}

export default Component;
