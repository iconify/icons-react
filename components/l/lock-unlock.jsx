import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr--ilbtr.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr--ilbtr"/>`,
		"fallback": "si-glyph:lock-unlock",
	});
}

export default Component;
