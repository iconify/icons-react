import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut1gsgb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut1gsgb_x"/>`,
		"fallback": "mdi:keyboard-f10",
	});
}

export default Component;
