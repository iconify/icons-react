import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwx86bcnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwx86bcnr"/>`,
		"fallback": "tdesign:lighthouse-1-filled",
	});
}

export default Component;
