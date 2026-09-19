import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmfocq2ph.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmfocq2ph"/>`,
		"fallback": "si-glyph:square-dashed-2",
	});
}

export default Component;
