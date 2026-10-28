import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxk8m-b5o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxk8m-b5o"/>`,
		"fallback": "selfhst:n8n-light",
	});
}

export default Component;
