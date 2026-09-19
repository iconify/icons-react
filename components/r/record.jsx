import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1-ankmjo.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1-ankmjo"/>`,
		"fallback": "si-glyph:record",
	});
}

export default Component;
