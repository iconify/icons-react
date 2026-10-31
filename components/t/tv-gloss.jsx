import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ria-2-bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ria-2-bok"/>`,
		"fallback": "withicons:tv-gloss",
	});
}

export default Component;
