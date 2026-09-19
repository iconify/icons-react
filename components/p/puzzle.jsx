import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbd53pbnn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbd53pbnn"/>`,
		"fallback": "si-glyph:puzzle",
	});
}

export default Component;
