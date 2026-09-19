import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eysv7-b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b eysv7-b1j"/>`,
		"fallback": "bxl:letterboxd",
	});
}

export default Component;
