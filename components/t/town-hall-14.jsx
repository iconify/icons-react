import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6j897b2o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6j897b2o"/>`,
		"fallback": "osmic:town-hall-14",
	});
}

export default Component;
