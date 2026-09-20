import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7c2-v0mx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7c2-v0mx"/>`,
		"fallback": "selfhst:planning-center-registrations-light",
	});
}

export default Component;
