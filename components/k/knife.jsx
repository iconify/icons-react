import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw9cx653v.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw9cx653v"/>`,
		"fallback": "si-glyph:knife",
	});
}

export default Component;
