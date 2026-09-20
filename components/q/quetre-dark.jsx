import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6yz8kxoi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6yz8kxoi"/>`,
		"fallback": "selfhst:quetre-dark",
	});
}

export default Component;
