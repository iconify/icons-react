import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nes2ifbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nes2ifbbr"/>`,
		"fallback": "mdi:person-multiple",
	});
}

export default Component;
