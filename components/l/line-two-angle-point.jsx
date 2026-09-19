import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvw6ur04b.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvw6ur04b"/>`,
		"fallback": "si-glyph:line-two-angle-point",
	});
}

export default Component;
