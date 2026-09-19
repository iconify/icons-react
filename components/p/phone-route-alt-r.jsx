import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7bclh6ay.css';
import '../../css/e/e9s0ab8fq.css';
import '../../css/y/y8uolzsot.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7bclh6ay"/><path class="e9s0ab8fq"/><path class="y8uolzsot"/>`,
		"fallback": "gis:phone-route-alt-r",
	});
}

export default Component;
