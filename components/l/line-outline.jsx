import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu8kq7bic.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu8kq7bic"/>`,
		"fallback": "glyphs:line-outline",
	});
}

export default Component;
