import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0py9l3oo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0py9l3oo"/>`,
		"fallback": "la:umbrella-beach",
	});
}

export default Component;
