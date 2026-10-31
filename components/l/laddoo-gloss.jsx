import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc1jk7bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc1jk7bsk wm-k"/>`,
		"fallback": "withicons:laddoo-gloss",
	});
}

export default Component;
