import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fydl6yp5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fydl6yp5o"/>`,
		"fallback": "streamline-freehand:wealth-gold-bars",
	});
}

export default Component;
