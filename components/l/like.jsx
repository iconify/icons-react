import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpr4c1bjc.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpr4c1bjc"/>`,
		"fallback": "si-glyph:like",
	});
}

export default Component;
