import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g66re9w6x.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g66re9w6x"/>`,
		"fallback": "si-glyph:square-four",
	});
}

export default Component;
