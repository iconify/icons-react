import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5dpu-bwd.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5dpu-bwd"/>`,
		"fallback": "si-glyph:square",
	});
}

export default Component;
