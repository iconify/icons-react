import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs8brccym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs8brccym"/>`,
		"fallback": "lucide:text-align-justify",
	});
}

export default Component;
