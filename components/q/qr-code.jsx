import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr4-q0bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr4-q0bzp"/>`,
		"fallback": "griddy-icons:qr-code",
	});
}

export default Component;
