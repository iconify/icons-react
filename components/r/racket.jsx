import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv2_abjze.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv2_abjze"/>`,
		"fallback": "at-icons:racket",
	});
}

export default Component;
