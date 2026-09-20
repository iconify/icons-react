import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqgar4bjj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqgar4bjj"/>`,
		"fallback": "vaadin:line-v",
	});
}

export default Component;
