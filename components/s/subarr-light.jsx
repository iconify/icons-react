import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npm2oqxob.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npm2oqxob"/>`,
		"fallback": "selfhst:subarr-light",
	});
}

export default Component;
