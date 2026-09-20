import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh3wbdc-e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh3wbdc-e"/>`,
		"fallback": "pinhead:rocketship",
	});
}

export default Component;
