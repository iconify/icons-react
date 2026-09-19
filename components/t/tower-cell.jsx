import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fut-rcs0e.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fut-rcs0e"/>`,
		"fallback": "fa6-solid:tower-cell",
	});
}

export default Component;
