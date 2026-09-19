import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je_islb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je_islb2s"/>`,
		"fallback": "circum:twitter",
	});
}

export default Component;
