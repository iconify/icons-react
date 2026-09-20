import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unprg6b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unprg6b4s"/>`,
		"fallback": "streamline-ultimate:love-it-flag-bold",
	});
}

export default Component;
