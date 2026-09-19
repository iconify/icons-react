import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8v1zhb3e.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8v1zhb3e"/>`,
		"fallback": "fa-solid:step-backward",
	});
}

export default Component;
