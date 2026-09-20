import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f11os4btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f11os4btd"/>`,
		"fallback": "si:more-square-vert-line",
	});
}

export default Component;
