import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6y8ptl6u.css';

const viewBox = {"width":1760,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6y8ptl6u"/>`,
		"fallback": "fa:maxcdn",
	});
}

export default Component;
