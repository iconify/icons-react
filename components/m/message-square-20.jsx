import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjxht45mk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjxht45mk"/>`,
		"fallback": "energy-icons:message-square-20",
	});
}

export default Component;
