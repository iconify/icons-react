import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa461_q4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa461_q4d"/>`,
		"fallback": "mage:video-question-mark-fill",
	});
}

export default Component;
