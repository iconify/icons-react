import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhpxaob-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhpxaob-n"/>`,
		"fallback": "selfhst:maker-management-platform-light",
	});
}

export default Component;
