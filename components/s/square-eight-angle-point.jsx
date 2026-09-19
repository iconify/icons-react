import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4fiu1brv.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4fiu1brv"/>`,
		"fallback": "si-glyph:square-eight-angle-point",
	});
}

export default Component;
