import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gos5wfb6t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gos5wfb6t"/>`,
		"fallback": "pinhead:pixel-star",
	});
}

export default Component;
