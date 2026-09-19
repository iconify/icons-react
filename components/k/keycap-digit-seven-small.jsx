import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcs24xbrd.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcs24xbrd"/>`,
		"fallback": "dinkie-icons:keycap-digit-seven-small",
	});
}

export default Component;
