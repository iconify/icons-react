import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iapb6lsot.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iapb6lsot"/>`,
		"fallback": "fa7-brands:square-figma",
	});
}

export default Component;
