import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rebpobb_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rebpobb_e"/>`,
		"fallback": "selfhst:linear-light",
	});
}

export default Component;
