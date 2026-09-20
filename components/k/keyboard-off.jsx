import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiaq2lk7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiaq2lk7b"/>`,
		"fallback": "mdi:keyboard-off",
	});
}

export default Component;
