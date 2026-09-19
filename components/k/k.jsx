import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpqs12bkd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpqs12bkd"/>`,
		"fallback": "glyphs-poly:k",
	});
}

export default Component;
