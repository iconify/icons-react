import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddiz8c_3z.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddiz8c_3z"/>`,
		"fallback": "si-glyph:paper-plane",
	});
}

export default Component;
