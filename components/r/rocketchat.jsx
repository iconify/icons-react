import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie_pn6uis.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie_pn6uis"/>`,
		"fallback": "fa-brands:rocketchat",
	});
}

export default Component;
