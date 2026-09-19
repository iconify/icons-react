import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3lq2-bmf.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3lq2-bmf"/>`,
		"fallback": "si-glyph:triangle-up",
	});
}

export default Component;
