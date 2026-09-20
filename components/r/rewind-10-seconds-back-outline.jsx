import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccy0osbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ccy0osbxe"/>`,
		"fallback": "solar:rewind-10-seconds-back-outline",
	});
}

export default Component;
