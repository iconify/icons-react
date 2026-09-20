import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk6wy_3eo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk6wy_3eo"/>`,
		"fallback": "selfhst:openprinting-cups-dark",
	});
}

export default Component;
