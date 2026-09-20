import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp0--ebus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp0--ebus"/>`,
		"fallback": "ri:letter-spacing-2",
	});
}

export default Component;
