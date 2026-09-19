import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyj4tfarm.css';

const viewBox = {"width":1046.16,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyj4tfarm"/>`,
		"fallback": "brandico:linkedin",
	});
}

export default Component;
