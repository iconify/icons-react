import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/des5q47ew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="des5q47ew"/>`,
		"fallback": "selfhst:jelu-light",
	});
}

export default Component;
