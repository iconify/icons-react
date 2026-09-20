import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eusrqmuak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eusrqmuak"/>`,
		"fallback": "thesvg-color:kaspersky",
	});
}

export default Component;
