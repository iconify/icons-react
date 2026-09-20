import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nha2ysi6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nha2ysi6l"/>`,
		"fallback": "token:near-protocol",
	});
}

export default Component;
