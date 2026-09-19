import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i__a2hb_t.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i__a2hb_t"/>`,
		"fallback": "academicons:jstor-square",
	});
}

export default Component;
