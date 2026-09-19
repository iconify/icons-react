import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc4w2nyzf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc4w2nyzf"/>`,
		"fallback": "si-glyph:right-justify",
	});
}

export default Component;
