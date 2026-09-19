import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc0ouunhx.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc0ouunhx"/>`,
		"fallback": "si-glyph:magnet",
	});
}

export default Component;
