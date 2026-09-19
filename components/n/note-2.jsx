import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_fl3cb8g.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_fl3cb8g"/>`,
		"fallback": "si-glyph:note-2",
	});
}

export default Component;
