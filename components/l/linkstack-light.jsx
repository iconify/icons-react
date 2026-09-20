import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii93tczut.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii93tczut"/>`,
		"fallback": "selfhst:linkstack-light",
	});
}

export default Component;
