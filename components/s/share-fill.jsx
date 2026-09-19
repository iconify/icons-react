import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jelrnxb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jelrnxb9h"/>`,
		"fallback": "eva:share-fill",
	});
}

export default Component;
