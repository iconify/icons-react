import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihy55zblz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihy55zblz"/>`,
		"fallback": "dinkie-icons:right-magnifying-glass-filled",
	});
}

export default Component;
