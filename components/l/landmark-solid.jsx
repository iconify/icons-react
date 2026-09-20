import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma39lbb6p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma39lbb6p"/>`,
		"fallback": "la:landmark-solid",
	});
}

export default Component;
