import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c25_9ibwm.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c25_9ibwm"/>`,
		"fallback": "fa-solid:trash-restore",
	});
}

export default Component;
