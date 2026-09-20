import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us8r5vb3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us8r5vb3s"/>`,
		"fallback": "selfhst:revolt",
	});
}

export default Component;
