import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgxvy9xdu.css';
import '../../css/o/on1z0j2yb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgxvy9xdu"/><path class="on1z0j2yb"/>`,
		"fallback": "selfhst:operately",
	});
}

export default Component;
