import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouj21t23v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouj21t23v"/>`,
		"fallback": "selfhst:medama-light",
	});
}

export default Component;
