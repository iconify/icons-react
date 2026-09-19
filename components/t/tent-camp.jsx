import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nna_jvqox.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nna_jvqox"/>`,
		"fallback": "si-glyph:tent-camp",
	});
}

export default Component;
