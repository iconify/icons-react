import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j849hib6v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j849hib6v"/>`,
		"fallback": "si-glyph:trash",
	});
}

export default Component;
