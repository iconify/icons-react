import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5z-5bcwu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5z-5bcwu"/>`,
		"fallback": "ix:skip-filled",
	});
}

export default Component;
