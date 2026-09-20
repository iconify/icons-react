import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3wb3mu3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3wb3mu3h"/>`,
		"fallback": "selfhst:push-security",
	});
}

export default Component;
