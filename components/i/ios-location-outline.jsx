import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs68a2a3q.css';
import '../../css/c/cb56blb8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs68a2a3q"/><path class="cb56blb8w"/>`,
		"fallback": "ion:ios-location-outline",
	});
}

export default Component;
