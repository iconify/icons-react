import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i55rs9b7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i55rs9b7t"/>`,
		"fallback": "selfhst:pleroma-light",
	});
}

export default Component;
