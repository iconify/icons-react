import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c72e17knh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c72e17knh"/>`,
		"fallback": "ix:moon-filled",
	});
}

export default Component;
