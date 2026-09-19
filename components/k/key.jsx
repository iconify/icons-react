import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkyy2kbqn.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkyy2kbqn"/>`,
		"fallback": "si-glyph:key",
	});
}

export default Component;
