import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fde7o7i7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fde7o7i7l"/>`,
		"fallback": "selfhst:volvo-light",
	});
}

export default Component;
