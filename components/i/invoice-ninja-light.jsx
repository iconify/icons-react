import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxlaa1b7n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxlaa1b7n"/>`,
		"fallback": "selfhst:invoice-ninja-light",
	});
}

export default Component;
