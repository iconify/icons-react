import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e488r-b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e488r-b1k"/>`,
		"fallback": "boxicons:spoon-filled",
	});
}

export default Component;
