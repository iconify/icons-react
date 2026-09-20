import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyn1iab4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyn1iab4s"/>`,
		"fallback": "streamline-ultimate:loading-bold",
	});
}

export default Component;
