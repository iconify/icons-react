import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt297qria.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt297qria"/>`,
		"fallback": "si-glyph:sheep",
	});
}

export default Component;
