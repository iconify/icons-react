import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jul67prvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jul67prvu"/>`,
		"fallback": "selfhst:pi-hole-dark",
	});
}

export default Component;
