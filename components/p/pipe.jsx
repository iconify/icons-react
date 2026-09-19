import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9qalhbpy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9qalhbpy"/>`,
		"fallback": "si-glyph:pipe",
	});
}

export default Component;
