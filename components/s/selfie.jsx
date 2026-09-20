import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez-7w8b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez-7w8b0n"/>`,
		"fallback": "uil:selfie",
	});
}

export default Component;
