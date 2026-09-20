import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npe-89b-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npe-89b-k"/>`,
		"fallback": "mdi:letter-j-box-outline",
	});
}

export default Component;
