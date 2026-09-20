import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkhogc02b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkhogc02b"/>`,
		"fallback": "thesvg-color:kinsta",
	});
}

export default Component;
