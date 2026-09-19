import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1x5o90gz.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1x5o90gz"/>`,
		"fallback": "si-glyph:piggy-bank",
	});
}

export default Component;
