import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2enu-pak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2enu-pak"/>`,
		"fallback": "mdi:roman-numeral-7",
	});
}

export default Component;
