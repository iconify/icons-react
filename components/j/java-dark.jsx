import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx9w5c09m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx9w5c09m"/>`,
		"fallback": "selfhst:java-dark",
	});
}

export default Component;
