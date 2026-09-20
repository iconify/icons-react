import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5d0gpb9e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5d0gpb9e"/>`,
		"fallback": "streamline:online-medical-call-service",
	});
}

export default Component;
