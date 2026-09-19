import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf6hpubqv.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf6hpubqv"/>`,
		"fallback": "si-glyph:spanner",
	});
}

export default Component;
