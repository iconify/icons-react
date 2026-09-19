import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-_3fsb4o.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-_3fsb4o"/>`,
		"fallback": "si-glyph:spray",
	});
}

export default Component;
