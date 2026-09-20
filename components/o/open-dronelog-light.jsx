import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuj184buw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuj184buw"/>`,
		"fallback": "selfhst:open-dronelog-light",
	});
}

export default Component;
