import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynpe42bhc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynpe42bhc"/>`,
		"fallback": "streamline:street-road",
	});
}

export default Component;
