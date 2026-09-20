import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unxhts-yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unxhts-yz"/>`,
		"fallback": "si:wallet-line",
	});
}

export default Component;
