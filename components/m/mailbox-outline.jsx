import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f298x6yqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f298x6yqv"/>`,
		"fallback": "mdi:mailbox-outline",
	});
}

export default Component;
