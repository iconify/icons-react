import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va83vo2ru.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va83vo2ru"/>`,
		"fallback": "fad:keyboard",
	});
}

export default Component;
