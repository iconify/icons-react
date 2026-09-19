import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-edk1j6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-edk1j6t"/>`,
		"fallback": "circum:text-align-left",
	});
}

export default Component;
