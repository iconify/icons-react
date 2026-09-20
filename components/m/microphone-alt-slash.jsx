import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-2chxb9r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-2chxb9r"/>`,
		"fallback": "la:microphone-alt-slash",
	});
}

export default Component;
