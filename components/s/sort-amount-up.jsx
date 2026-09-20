import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln6tz6b3a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln6tz6b3a"/>`,
		"fallback": "la:sort-amount-up",
	});
}

export default Component;
