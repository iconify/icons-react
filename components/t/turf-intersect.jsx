import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ael58jbdh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ael58jbdh"/>`,
		"fallback": "geo:turf-intersect",
	});
}

export default Component;
