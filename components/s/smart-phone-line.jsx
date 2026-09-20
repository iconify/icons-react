import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nczf77b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nczf77b0v"/>`,
		"fallback": "si:smart-phone-line",
	});
}

export default Component;
