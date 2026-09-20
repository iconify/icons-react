import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njgul7b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njgul7b1s"/>`,
		"fallback": "uil:redo",
	});
}

export default Component;
