import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d03my4b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d03my4b1k"/>`,
		"fallback": "token:met",
	});
}

export default Component;
