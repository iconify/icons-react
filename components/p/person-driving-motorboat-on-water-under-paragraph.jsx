import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh23lb5bp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh23lb5bp"/>`,
		"fallback": "pinhead:person-driving-motorboat-on-water-under-paragraph",
	});
}

export default Component;
