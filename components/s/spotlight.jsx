import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfwfh6omr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfwfh6omr"/>`,
		"fallback": "lucide:spotlight",
	});
}

export default Component;
