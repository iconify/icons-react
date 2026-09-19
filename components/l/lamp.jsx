import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1qvqb9_q.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1qvqb9_q"/>`,
		"fallback": "si-glyph:lamp",
	});
}

export default Component;
