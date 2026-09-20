import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcc4ktbbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcc4ktbbv"/>`,
		"fallback": "subway:left-arrow",
	});
}

export default Component;
