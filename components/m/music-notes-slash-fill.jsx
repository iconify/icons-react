import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8x6d_bka.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8x6d_bka"/>`,
		"fallback": "pullo:music-notes-slash-fill",
	});
}

export default Component;
