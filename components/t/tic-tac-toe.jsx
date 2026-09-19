import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn6qiobpx.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn6qiobpx"/>`,
		"fallback": "si-glyph:tic-tac-toe",
	});
}

export default Component;
