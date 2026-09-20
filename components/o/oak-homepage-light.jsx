import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud03tlhci.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud03tlhci"/>`,
		"fallback": "selfhst:oak-homepage-light",
	});
}

export default Component;
