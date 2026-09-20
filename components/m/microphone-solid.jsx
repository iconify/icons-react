import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzzebibhb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzzebibhb"/>`,
		"fallback": "la:microphone-solid",
	});
}

export default Component;
