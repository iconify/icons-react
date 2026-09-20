import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_0stws9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_0stws9e"/>`,
		"fallback": "uil:letter-english-a",
	});
}

export default Component;
