import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9i1vdbko.css';
import '../../css/o/oakyvybig.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9i1vdbko"/><path class="oakyvybig"/>`,
		"fallback": "geo:turf-erased",
	});
}

export default Component;
