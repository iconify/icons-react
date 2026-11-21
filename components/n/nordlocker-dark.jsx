import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0cf-zb9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0cf-zb9h"/>`,
		"fallback": "selfhst:nordlocker-dark",
	});
}

export default Component;
