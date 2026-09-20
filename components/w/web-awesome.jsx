import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkap942sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkap942sx"/>`,
		"fallback": "thesvg-color:web-awesome",
	});
}

export default Component;
