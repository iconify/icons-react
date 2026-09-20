import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzi7nyb0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzi7nyb0o"/>`,
		"fallback": "selfhst:ironmount-light",
	});
}

export default Component;
