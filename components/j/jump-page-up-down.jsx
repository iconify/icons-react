import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eei12nfrq.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eei12nfrq"/>`,
		"fallback": "si-glyph:jump-page-up-down",
	});
}

export default Component;
