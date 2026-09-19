import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duvpq18rm.css';

const viewBox = {"width":630,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duvpq18rm"/>`,
		"fallback": "il:pin",
	});
}

export default Component;
