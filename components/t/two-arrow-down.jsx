import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1loo9bkg.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1loo9bkg"/>`,
		"fallback": "si-glyph:two-arrow-down",
	});
}

export default Component;
